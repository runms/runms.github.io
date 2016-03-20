/**  Created by Misha on 04.08.2015 */
/*
var links = document.querySelectorAll("a");
for (var i = 0; i < links.length; i++) {
    var a = links[i];
    if (a.getAttribute('href').indexOf('//') >= 0) {
        a.classList.add('external');
    }
}
*/

var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
    var a = links[i];
    if (a.getAttribute('href').indexOf('//') >= 0) {
        a.classList.add('external');
    }
}


