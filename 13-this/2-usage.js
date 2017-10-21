var prop = 10;

function test(a, b) {
    var prop = 50;
    console.log(this); // window or test
    console.log(this.prop); // 10 or 10
    console.log(a, b);
};

test(10, 30);
window.test(10, 30);

var obj = {
    prop: 100
};

// call
test.call(obj, 10, 30);

// if you have to run in the window context you can follow the following ways.
test.call(window, 10, 30)
    // OR
test(10, 30)

// apply
test.apply({
    prop: 40
}, [10, 20]);

// what if we have something like this
var name = 'sameera';
var module = {
    name: 'abc',
    getName: function() {
        console.log(this.name);
    }
}

console.log("-------------------------");
module.getName(); // what will be the output
module.getName.call(window); // with some other context


// BIND //
var getName0 = module.getName;
var getName1 = module.getName.bind(module);
var getName2 = module.getName.bind({ name: 'xyz' });

getName0();
getName1(); // output of line 31 and 37 is the same. as the context is the same
getName2();