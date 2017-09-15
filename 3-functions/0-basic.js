// what is a function ?
// how to define it
// how to execute it
// how to call in diff ways
// arguments in function and how are they diff from JAVA
// scope in function - this is important
// hoisting in functions - this is important
// self invoking functions -- which i also call as IIFE(Immediate invoking function expression)
// closures in function
// recursive mechanism
// this keyword
// to use call(), apply() and bind()
// callbacks



// function keyword
// function name
// function arguments
// function body
function test(a, b) {
    console.log('function executed...');
    return 123;
}

console.log("#######################################");
// Now lets see how we can use the arguments and the return type
function test2(a, b) {
    console.log(a, b);
    return 234;
}
test2(); // call this function like this
var result = test2();
console.log(result);
console.log(test2(10, 20)); // we get 10, 20 printed

function test3(a, b) {}
console.log(test3()); // we get undefined

// console.log("#####################################");

var func;
// func(); // uncomment it and see for yourself what is the output
if (typeof func === 'function') {
    func();
}

func = function () {
    console.log('now i am a function');
};
func();

// call it in diff ways
function fn() {
    console.log('function as a function name');
}
var fn1 = function () {
    console.log('function as function variable name');
}
fn();
console.log(typeof fn, typeof fn1);

// console.log("#######################") 
// console.log("Anonymous functions")
// console.log("#######################")