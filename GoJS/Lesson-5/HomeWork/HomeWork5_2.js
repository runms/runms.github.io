/**  Created by Misha on 02.07.2015 */
/* Task 2 */

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
console.log (image);