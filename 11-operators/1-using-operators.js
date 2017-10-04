console.log('---------\naddition with string\n----------');
console.log(5 + 5);//10
console.log('5' + 5);//5 //55
console.log(5 + '5', typeof(5 + '5'));//55
console.log(5 + 'a' + 5);//5a5
console.log('a' + 5 + 5);//a10 //a55
console.log(5 + 5 + 'a');//10a
console.log(NaN + 5);//NaN
console.log(NaN + '5');//NaN

console.log('---------\nsubtraction with string\n----------');
console.log('5' - 5);//0 //5
console.log(5 - '5');//NaN //0
console.log(5 - '5a');//NaN
console.log('5a' - 5);//NaN

console.log('---------\nmultiplication with string\n----------');
console.log('5' * 5);
console.log(5 * '5');
console.log(5 * '5a');
console.log('5a' * 5);

console.log('---------\ndivision with string\n----------');
console.log('5' / 5);
console.log(5 / '5');
console.log(123/'5');
console.log('123'/5);
console.log('1a'/5);
