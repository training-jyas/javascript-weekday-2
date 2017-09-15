function run() {
    console.log('--------run----------');

    console.log(test); // shold give me a error
    var test = 'hello';
    console.log(test); // hello

    // how does it print here when we havent create the method printHello  yet ?
    printHello('world'); // should throw me a error
    function printHello(value) {
        console.log(value); // no output
    }

    printString('abc'); // should throw an error
    var printString = function (value) {
        console.log(value); // no putput
    }

    return 'ok';
}
run();

// Two take aways from this :-
// 1. All the function definition is hoisted to the top of the scope
// 2. All the declarations is hoisted to the top of the scope


// the above method will be converted to this.
function run2() {
    var test;
    function printHello(value) {
        console.log(value);
    }
    var printString;

    console.log(test);
    test = 'hello';
    console.log(test);
    printHello('world');
    printString('Harsha');
    printString = function (value) {
        console.log(value);
    }

    return 'ok';
}

//  function run3() {
//      console.log('-----------run3-----------');
//      var fn = function () {
//          console.log('func 1');
//      }
//      fn();
//      fn2();
//      console.log(abc);
//      var abc = 50;
//      var fn = function () {
//          console.log('func 2');
//      }
//      function fn2() {
//          console.log('func 3');
//      }
//  }
// //  run3();

//  // above function run3 will be converted to this functon run4
//  function run4() {
//      var fn = function () {
//          console.log('func 1');
//      }
//      var fn;
//      var abc;
//      function fn2() {
//          console.log('func 3');
//      }
//      fn();
//      fn2();
//      console.log(fn);
//      console.log(abc);
//      abc = 50;
//      fn = function () {
//          console.log('func 2');
//      }
//  }

// //  run4();

// // var abc = "abc";
// // var abc;
// // console.log('abc -', abc);