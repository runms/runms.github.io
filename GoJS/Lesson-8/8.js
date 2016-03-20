/* Created by Misha on 30.06.2015 */
var calculator = {
    read: function () {
        this.a = +prompt('enter A');
        this.b = +prompt('enter B');
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
};

calculator.read();
console.log (calculator.sum());
console.log (calculator.mul());