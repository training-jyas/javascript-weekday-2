var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lokijs = require('lokijs');

// Database
var db = new lokijs('example.db');
db.addCollection('users');
let users = db.getCollection('users');
users.insert([{
    "username": "sameera",
    "fullname": "Sameera",
    "email": "sameera@xyz.com",
    "gender": "female",
    "location": "bengaluru",
    "age": 20
}, {
    "username": "khasim",
    "fullname": "Khasim",
    "email": "khasim@xyz.com",
    "gender": "male",
    "location": "bengaluru",
    "age": 20
}]);

var user = require('./route/user');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../webapp')));

// Make our db accessible to our router
app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/user', user);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', {
        error: err
    })
});

app.listen(3000, function(){
    console.log('server started at port num - 3000');
});