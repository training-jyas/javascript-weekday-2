var person = {
    "name": "abc",
    "age": 3,
    "hobbies": ['tt', 'bb', 'cricket'],
    "friend": {
        "name": "sdfs",
        "age": 23
    },
    "walk": function() {
        console.log('person is walking');
    },
    "isBoy": false
}

console.log(person.friend.name);
console.log(person.hobbies);
console.log(person.hobbies[2]);
console.log(person.walk());

// JSON
console.log('json global object -', JSON);

console.log('----------json stringify--------');
console.log('person -', person);
var personObjString = JSON.stringify(person);
console.log('person stringified -', personObjString)
console.log('typeof personObjString -', typeof personObjString);
console.log(personObjString.name);

console.log('----------- json parse ------------');
var personObjFromString = JSON.parse(personObjString);
console.log('person json from person steing -', personObjFromString);
console.log(personObjFromString.name);

// say for example you get all the transactions for a bank account holder
// to represent the result in json format
var response = {
    result: [{
        "id": 123,
        "amount": 2345,
        "date": new Date()
    }, {
        "id": 124,
        "amount": 23345,
        "date": new Date() + 1
    }]
}

response.result.forEach(function(item, index) {
    console.log('amount in object at index', index, 'is', item.amount);
    item.newProp = 'hello' + index;
});
console.log(response.result);

// say you want to login a page
var usernameVal = 'abc';
var passwordVal = 'xljdsfjsajf';
var loginObj = {
    username: usernameVal,
    password: passwordVal
}
var loginObjString = JSON.stringify(loginObj);

var tableData = {
    result: {
        columns: ['name', 'age', 'role'],
        rowData: [{
            name: 'afds',
            age: 34,
            role: 'dsfds'
        }, {
            name: 'afdsf',
            age: 343,
            role: 'adf'
        }, {
            name: 'afsaf',
            age: 342,
            role: 'afdsf'
        }]
    }
}


// below are the json objects which we can use to populate a dashboard
var personObj = {
    name: '',
    age: 12,
    designation: '',
    role: ''
}

var menus = {
    menu1: '',
    menu2: {
        menu1: '',
        menu2: ''
    },
    menu3: {
        menu1: '',
        menu2: {
            menu1: '',
            menu2: ''
        }
    }
}

var navigation = ['', '', '', ''];

var widget = {
    header: '',
    content: '',
    footer: ''
}

// populate the above objects

// login object
loginObj.username = 'Raj';
loginObj.password = 'Raj';

loginObj['username'] = 'sameera';
loginObj['password'] = 'khasim';

// menus
menus.menu1 = 'Menu1';
menus.menu2.menu1 = 'Menu2-Menu1';
menus.menu2.menu2 = 'Menu2-Menu2';
menus.menu3.menu1 = 'Menu3-Menu1';
menus.menu3.menu2.menu1 = 'Menu3-Menu2-Menu1';
menus.menu3.menu2.menu2 = 'Menu3-Menu2-Menu2';

var itemObj = {
    itemArray: ['raj', 'jyasveer', 'raj2', {
            name: 'tina',
            age: 23,
            hobbies: ['songs', 'tabletennis']
        },
        [1, 2, [5, 6, 7]]
    ]
}

