// 1. i have a variable. if it is a string i want to print as "it is a string" else i want "i dont know what it is"

var test;

if (typeof test == 'string') {
    console.log('var `test` is a string');
} else {
    console.log('i dont know');
    console.log(typeof test);
}