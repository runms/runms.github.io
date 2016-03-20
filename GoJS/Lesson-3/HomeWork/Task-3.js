/* Created by Misha on 21.06.2015 */
/* task 1 */

do {
    var inputNumber = prompt('number>100');
} while (inputNumber < 100)
console.log(inputNumber)

/* task 2 */

/* task 3 */

for (i = 1; i < 101; i++) {
    if (i % 3 == 0) {
        console.log(i + ' Fizz');
    } else if (i % 5 == 0) {
        console.log(i + ' Buzz')
    } else {
        console.log(i)
    }
}

/* task 4 */

for (i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i+' FizzBuzz')
    }
}

/* task 5 */


/* task 6 */
var result
function pow(x,n) {
    result=x;
    for (i=2;i<=n;i++) {
        result *= x;
    }
    return result;
}
