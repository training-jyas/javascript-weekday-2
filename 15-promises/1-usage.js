var promiseFunc = function (bool) {
    if (bool) {
        return 'resolved';
    } else {
        return 'rejected';
    }
}
    // this call would give me 'resolved'
console.log(promiseFunc(true));

var promiseFunc2 = function(bool) {
    if (bool) {
        setTimeout(function() {
            return 'resolved';
        }, 3000);
    } else {
        setTimeout(function() {
            return 'rejected';
        }, 3000);
    }
}
console.log(promiseFunc2(true));

// lets try to solve this use case below using promises
console.log("########## Promise implementation");
var promiseFunc3 = function(bool) {
    return new Promise(function(resolve, reject){
        if (bool) {
            setTimeout(function() {
                resolve('resolved');
            }, 3000);
        } else {
            setTimeout(function() {
                reject('rejected');
            }, 3000);
        }
    });
}
var successCallback = function(data) {
    console.log('success -', data);
};
var failureCallback = function(data) {
    console.log('failure -', data);
};
var bool = false;
promiseFunc3(bool)
    .then(successCallback)
    .catch(failureCallback);

var promiseFunc4 = function(bool) {
    return new Promise(function(resolve, reject) {
        if (bool) {
            setTimeout(function() {
                console.log('promise 4 resolution time', new Date());
                resolve('resolved success 2');
            }, 8000);
        } else {
            setTimeout(function() {
                reject('rejected failure 2');
            }, 8000);
        }
    });
}

// Promise.all
console.time('timer');
console.log(new Date());
var prom3 = promiseFunc3(true);
var prom4 = promiseFunc4(true);

Promise.all([prom3, prom4])
    .then(function(datas) {
        console.log('resolved datas -', datas);
        console.timeEnd('timer');
    })
    .catch(function(data) {
        console.log('rejected data -', data);
    });


// say suppose 
// 1. in one loop i have to loop from 1 to 1000. 
// 2. in second loop i have to loop from 1 to 500
// now i want to print something when i am done looping for both


for (var i = 0; i < 10000; i++) {
    if ( i == 9999) {
        console.log('loop 1 done');
    }
}

for (var i = 0; i < 500; i++) {
    if ( i == 499) {
        console.log('loop 2 done');
    }
}

console.log('both loops are done');
