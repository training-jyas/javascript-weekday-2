let express = require('express');
let router = express.Router();

/*
GET userlist.
*/
router.get('/all', function (req, res) {
    let db = req.db;
    let users = db.getCollection('users');
    let result = users.find();
    console.log('get all request - ', result);
    res.send(result);
});

/*
  POST to adduser.
 */
router.post('/add', function (req, res) {
    let db = req.db;
    let users = db.getCollection('users');
    console.log('add request called !');
    console.log(req.body);
    let result = users.insert(req.body);
    console.log('user added to the collection -', result);
    res.send(result);
});

/*
  DELETE to deleteuser.
 */
router.delete('/delete/:id', function (req, res) {
    let db = req.db;
    let users = db.getCollection('users');
    let userToDelete = req.params.id;
    console.log('delete request called !');
    console.log(userToDelete);
    let result = users.remove({
        '$loki': userToDelete
    });
    console.log('user deleted from the collection -', result);
    res.send(result);
});

module.exports = router;