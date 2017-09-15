var global = 'abc';

function test() {
    var local = 'def';
    console.log('global : global : ', global);
    console.log('test : local : ', local);

    function inner() {
        var inner = 'ghi';
        console.log('global : global : ', global);
        console.log('test : local : ', local);
        console.log('inner : inner : ', inner);
    }
    inner();
}

test();
console.log('global : global', global);
console.log('global : local', local);