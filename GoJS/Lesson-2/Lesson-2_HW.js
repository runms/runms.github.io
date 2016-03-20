/**  Created by Misha on 06.02.2016 */
 /* <1>
var year = prompt('What year is it now?');

if (year == 2015) {
    alert('You are right');
} else {
    alert('Are you health?');201
}*/

/* <2>
var userNumber = +prompt('Give me number please');

if (userNumber > 0) {
    alert(1)
} else if (userNumber < 0) {
    alert(-1)
} else {
    alert(0)
};
 */

/* <3>

function checkAge (age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('What are parent?')
    }
}

age = prompt('Write your age');

if (!checkAge(age)) {
    console.log('Access denid')
} else {
    console.log('Access allowed')
}

 */

/* <4>
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}
ask(
    'Вы согласны?',
    function() { alert('Вы согласились.'); },
    function() { alert('Вы отменили выполнение.'); }
);  */

 /* <5> */

function checkUser () {
    var user = prompt('Write your name');

    if (user = "admin") {
        checkPassword()
    } else if (escape) {
        alert('Canceled')
    } else {
        alert('Access denied')
    }
}

function checkPassword() {
    var pass = prompt('Write your password');

    if (pass = 'passw0rd') {
        alert('Welcome')
    } else {
        alert('canceled')
    }
}
 checkUser();