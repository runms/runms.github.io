/**  Created by Misha on 16.07.2015 */
// Task 1 REDUCE
var arr = [1, 2, 3, 4, 5, 6, 8];
var j = arr.reduce(function (a, b) {
    if (b % 2 === 0) {
        return a * b;
    } else {return a }
});
console.log (j);