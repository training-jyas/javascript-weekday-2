var personJson = {
    height: '5-5',
    getHeight: function() {
        return this.height;
    }
}

console.log(personJson);
console.log(personJson.getHeight());

// to access the height key you can call it in two ways
// first way
console.log(personJson.height);
// second way
console.log(personJson['height']);

console.log("#################### Object - new ##########");

function PersonClass(height, name) {
    var weight = 20; // this is a private variable

    function inchToMetre(val) {
        return val;
    }

    this.height = height;
    this.name = name;
    this.getHeightInMetres = function() {
            return 'Person\'s height in metres - ' + inchToMetre(this.height);
        }
        // this.complexion = null;
    this.getComplexion = function() {
        return 'Complexion - ' + this.complexion;
    }
}

PersonClass.prototype.getName = function() {
    return 'Name -' + this.name;
}

// we create a object from the function class
var personObj = new PersonClass(6, 'John');
console.log(personObj.height);
console.log(personObj.getHeightInMetres());

// if i want to access the private method
// console.log(personObj.inchToMetre()) // uncomment this to see the output
console.log(personObj.getName());

var personObj2 = new PersonClass(7, 'Ram');
console.log(personObj2.height);
console.log(personObj2.getHeightInMetres());
console.log(personObj2.getName());

personObj.complexion = 'Brown';
console.log(personObj.getComplexion());
console.log(personObj2.getComplexion());

// now what if i do something like this
// here we are creating a "complexion" property on the prototype object of the PersonClass which will be shared among all the instances
PersonClass.prototype.complexion = 'Brown';
console.log('personObj', personObj);
console.log('personObj2', personObj2);
console.log(personObj.getComplexion());
console.log(personObj2.getComplexion());

// using prototype globally
// we have read the "join" method in the Array module. how i can modify it using the prototype object of the "Array" class
Array.prototype.join2 = function(char) {
    var strArr = [];
    var seperator = char || '*';
    this.forEach(function(item, index) {
        strArr.push(item);
    });
    return strArr.join(seperator);
}

var arr = new Array(10, 20, 30);
console.log(arr.join2());
console.log(arr.join());

// var forEach = function (callback) {
//     var array = this;
//     var arr2Length = array.length;
//     for (var i = 0; i < arr2Length; i++) {
//         console.log('my for each method');
//         callback(array[i], i);
//     }
// };

// Array.prototype.forEach = forEach;