/** Created by Misha on 09.07.2015 */

/* Task 10_1 */
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};
var numbers = [];
var strings = [];

function extractNumber(arr) {
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            numbers.push(obj[key]);
        }
    } return numbers;
}
function extractString(arr) {
    for (var key in obj) {
        if (typeof obj[key] === 'string') {
            strings.push(obj[key]);
        }
    }return strings;
}

console.log (extractNumber(obj));
console.log (extractString(obj));