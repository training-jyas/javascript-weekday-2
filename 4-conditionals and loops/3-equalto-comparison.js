(function () {
    "use strict"

    var numstr = '123';
    var num = 123;
    var str = 'abc';
    var str = 'def';
    var nullVal = null;
    var undefinedVal = undefined;
    var arrayEmpty = [];
    var arrayWithVal = [1, 2, 3];
    var objEmpty = {};
    var objWithVal = {
        'name': 'asf'
    };
    var bool = true;
    var func = function () {};

    // check the nullability of a variable
    if (nullVal) {
        console.log('null is true');
    } else {
        console.log('null is false');
    }

    if (10 % 2 == 0) {
        console.log('10 is even');
    }

    var num = 11;
    if (!(num % 2)) {
        console.log('num is even');
    } else {
        console.log('num is odd');
    }

    if (undefinedVal) {
        console.log('undefined is true');
    } else {
        console.log('undefined is false');
    }

    if (arrayEmpty) {
        console.log('empty array is true');
    } else {
        console.log('empty array is false');
    }

    if (objEmpty) {
        console.log('empty obj is true');
    } else {
        console.log('empty obj is false');
    }

    console.log((false == 0) ? 'false == 0' : 'false !== 0');
    console.log((false === 0) ? 'false === 0' : 'false !=== 0');

    // == comparison
    if (numstr === num) {
        console.log('string 123 === number 123');
    } else if (numstr == num) {
        console.log('string 123 !=== number 123');
        console.log('string 123 == number 123');
    } else {
        console.log('string 123 !== number 123');
    }

    var temp;
    // how do you check the existence or nullability
    if (temp && temp !== 0) {
        if (typeof temp === 'function') {
            temp();
        } else if (temp.length) {
            // do the array operation
        } else if (temp.keys().length) { // here we assumed that the obj has a property called 'name'
            // do the object operation
        } else {
            //  do the primitive operations
        }
    }
})();