/**  Created by Misha on 02.07.2015 */

/* Task1 */

var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
    }
};

ladder.up().up().up().showStep();


/* Task 2 */
var calc = new Calculator;
function calculator() {
    var operations = {};
    return {
        addMethod: function (op, fn) {
            operations[op] = [fn];
        },

    }
}


var powerCalc = new Calculator;
powerCalc.addMethod('*', function (a, b) {
    return a * b;
});
powerCalc.addMethod('/', function (a, b) {
    return a / b;
});
powerCalc.addMethod('**', function (a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log(result); // 8

console.log(calc.calculate('3 + 7')); // 10