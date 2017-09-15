var closureFunc = function (num) {
    var innerFunc = function(num2){
        var innerfunc2 = function(num3){
            return num + num2 + num3;
        }
        return innerfunc2;
    }
    return innerFunc;
};

var func = closureFunc(10);
var func2 = func(20);
console.log("value from inner func 2 : ",func2(30));

// what is closure ?
// Closure gives you a way to access scope although you are out of the scope execution cycle