// iife vs closures
(function (){
    console.log('func 1');

    test();

    function test(){
        console.log('test');
    }
})();