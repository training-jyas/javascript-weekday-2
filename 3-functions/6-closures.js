var closureFunc = function (num) {
    var a = 10;
    return function() {
        console.log(a);
    }
};
var func = closureFunc(10);
func();

var sum = function(num) {
    return function(num2) {
        return function(num3) {
            return num + num2 + num3;
        }
    }
}
var result1 = sum(10)(20)(30);
// OR
var func = sum(10);
var func2 = func(20);
var result2 = func2(30);
console.log(result1, result2);
// what is closure ?
// Closure gives you a way to access scope although you are out of the scope execution cycle