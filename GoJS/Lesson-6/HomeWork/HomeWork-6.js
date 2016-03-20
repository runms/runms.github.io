/**  Created by Misha on 30.06.2015 */
/* Task 1 */

var obj = {
    className: 'open menu'
};
function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(cls) > -1) {
            arr.splice(arr.indexOf(cls), 1);
        }
    }
    obj.className = arr.join(' ');
}
removeClass(obj, 'open');
console.log(obj.className);

/* Task 2 */

var skills = ['HTML', 'JavaScript', "CSS"];
skillsSorted = skills.slice();
skillsSorted.sort();

console.log('skillsSorted: ' + skillsSorted);
console.log('skills: ' + skills);

/* Task 3 */

var arr = [1, 2, 3, 4, 5];
arr.sort(function () {
    return Math.random() < 0.5 ? 1 : -1;
});
console.log(arr);

/* Task 4 */

var vasia = {name: 'Вася', age: 23};
var masha = {name: 'Маша', age: 18};
var vovan = {name: 'Вован', age: 6};
var people = [vasia, masha, vovan];

function sorting(i, j) {
    if (i.age < j.age)
        return -1;
    if (i.age > j.age)
        return 1;
    return 0;
}

people.sort(sorting);

console.log(people[0].age);
for (m in people) {
    console.log(people[m].name + ':' + people[m].age)
}

/* Task 5 */

function isPal(j) {
    var norm = j.split(' ').join('').toLowerCase();
    var rev = j.split('').reverse().join('').toLowerCase().split(' ').join('');
    return (norm === rev);
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false

/* Task 6 */

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];

function unique(arr) {
    var newArr = [];
    arr.forEach(function (it) {
        if (newArr.indexOf(it) === -1) {
            newArr.push(it);
        }
    });
    return newArr;
}
console.log(unique(strings));

/* Task 7 */
// розділити по словах, потім по буквах
// відсортувати
// порівняти

var anagrams = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr) {
    var arrClean = [];
    var convertWord = arr.map(function (it) {
        return it.split('').sort().join('').toLowerCase();
    });
    convertWord.forEach(function (every) {
        if (arrClean.indexOf(every) === -1) {
            arrClean.push(every);
        }
    }); return arrClean;
}
console.log(anClean(anagrams));

/* Sidko solution*/
arr = ['воз', "зов", "гробик", "киборг"];
var alreadyUsed = {};

var filtered = arr.filter(function(word){
    var code = word.toLowerCase().split('').sort().join();
    if (alreadyUsed[code]) return false;
    alreadyUsed[code] = 1;
    return true;
});

console.log(filtered);