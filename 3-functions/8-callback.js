// example to show if the parameter is a function and how to check
// callbacks
var succesCallback = function (num) {
    console.log('i am the SUCCESS callback. and the num is :', num);
};

var failureCallback = function (num) {
    console.log('i am the FAILURE callback. and the num is :', num);
};

var checkIf20 = function (num, success, failure) {
    if (num === 20) {
        if (typeof success === 'function') {
            success(num);
        } else {
            console.log("num is :", num);
        }
        return true;
    } else {
        if (typeof failure === 'function') {
            failure(num);
        } else {
            console.log("num is not 20 but :", num);
        }
        return false;
    }
}

console.log("######################");
console.log('if the num is 20', checkIf20(20));
console.log("######################");
console.log('if the num is 20', checkIf20(30));
console.log("######################");
console.log('if the number is 20 and callback executed -', checkIf20(20, succesCallback, failureCallback));
console.log("######################");
console.log('if the number is 20 and callback executed -', checkIf20(30, succesCallback, failureCallback));