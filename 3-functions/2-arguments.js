// arguments in function
var test = function (a, b) {
    console.log('value of a =', a);
    console.log('value of b =', b);
    console.log('arguments = ', arguments);
    console.log('values in the arguments array =', arguments[0], arguments[1], arguments[2]);
    console.log('---------------------');
}

test(10, 20);
test(10);
test(null, 20);
test();

// what if we pass more than the declared arguments
test(10, 20, 30);

// function sum() {
//     var sum = 0;
//     // having the if condition here is a redundant thing. if the arguments array is empty it will not run the for loop in first place
//     // if (arguments.length > 0) {
//         for (var i = 0; i < arguments.length; i++) {
//             sum = sum + arguments[i];
//         }
//     // }
//     return sum;
// }
// console.log("####### sum ########");
// console.log(sum());
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));