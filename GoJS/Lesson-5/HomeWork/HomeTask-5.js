/** Created by Misha on 21.06.2015 */

/*/!* Task 1 *!/
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};


for (var moreTasks in tasksCompleted) {
    var any = -1;
    var max = 0;
    if (any < tasksCompleted[moreTasks]) {
        any = tasksCompleted[moreTasks]
        max = moreTasks;
    }
} console.log (max);


/!* Task 2 *!/

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(image);
console.log (image);*/

/* Task 3 */
function calcEnterdNumbers() {
    var numbers=[];
    var numbersSum = 0;
    while(true) {
        var number = +prompt('Enter number');
        if (number || number === 0) {
            numbers.push(number);
        } else {
            break
        }
    } alert (numbers);
    for (var i in numbers){
        numbersSum += numbers[i];
    } alert(numbersSum);

}
calcEnterdNumbers()
