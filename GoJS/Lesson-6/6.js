/**  Created by Misha on 23.06.2015 */
var obj = {
    className: 'open menu'
}
function addClass(obj, cls) {
    var arr = obj.className.split(' ');
    if (arr.indexOf(cls) === -1) {
        arr.push(cls);
        obj.className = arr.join(' ')
    }
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

console.log(obj.className);