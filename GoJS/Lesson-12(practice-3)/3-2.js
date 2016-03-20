/**  Created by Misha on 16.07.2015 */
/* Task 2 ЗАДЕРЖКА
 * Напишите функцию delay(fn, ms), которая возвращает обёртку вокруг fn, задерживающую вызов на ms миллисекунд.*/

/*var sayHello = function(){ console.log('Hello!'); };

 function delay(fn, ms) {
 return function(){
 setTimeout(fn, ms);
 };}
 var sayHelloDelayed = delay(sayHello, 500);
 sayHelloDelayed(); //  Через 500 мс выведет "Hello"*/

var sayHello = function() {
    [].join.apply(arguments, [':']);
    console.log([].join.apply(arguments, [':']));
};
function delay(fn, ms){
    return function(){
        var args = arguments;
        setTimeout(function() {
            fn.apply(null, args);
        }, ms);
    };
}
var newFn = delay(sayHello, 500);

newFn('Oleksandr', 'Sidko', 'Mykolayovych');