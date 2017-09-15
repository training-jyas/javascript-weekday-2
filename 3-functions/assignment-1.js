// you should create a calculator method, which accepts a 3 parameters.
// it should check all the nullability conditions
// it should also check the type of the parameters before using it.

// operations = 'add', 'subtract', 'divide', 'multiply'

function calculator(operation, a, b, c, ...) {

}

// all the below should work
calculator('operation', );
calculator('operation', 10);
calculator('operation', 10, 20);
calculator('operation', 10, 20, 30);
calculator('operation', 10, 20, 30, 40, 50);
calculator('operation', 'hello', 'jyasveer');
calculator('operation', null, null);
calculator('operation', undefined, null);
calculator('operation', null, undefined);