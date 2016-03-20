/**  Created by Misha on 07.07.2015 */
var sum = function(a, b) { return a + b; };
var sayHello = function(str) { return str; };

function makeLogger(fn) {
    return function() {
        console.log(arguments);
        fn.apply(this, arguments);
        //console.log('' + ' = ' + '');
    };
}

sum = makeLogger(sum);
sayHello = makeLogger(sayHello);

sum(10, 20);
sayHello('Oleksandr');
sayHello('Sidko');
sum(50, 60);

// [10, 20] = 30
// ['Oleksandr'] = 'Oleksandr'
// ['Sidko'] = 'Sidko'
// [50, 60] = 110