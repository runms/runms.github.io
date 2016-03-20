/**  Created by Misha on 16.07.2015 */

function f(){
}
var f = debounce(f, 1000);
function debounce(fn, ms) {

}




// dsddd
function debounce(fn, ms) {
    var canRun = true;
    return function(){
        if (!canRun) return;
        fn();
        canRun = false;
        setTimeout(function(){
            canRun = true;
        }, ms);
    };
}

var timerId = setInterval(debounce(function(){
    console.log('Hello!');
}, 500), 20);

setTimeout(function(){
    clearInterval(timerId);
}, 5000);