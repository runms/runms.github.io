/**  Created by Misha on 09.07.2015 */
var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

function sortClass(arr1) {
    var frequency = {};
    for (var i = 0; i < arr1.length; i++) {

        if (frequency[arr1[i]]) {
            frequency[arr1[i]]++;
        } else {
            frequency[arr1[i]] = 1;
        }
    }
    function sorty(a, b) {
        return (frequency[b] - frequency[a]);
    }
    return Object.keys(frequency).sort(sorty);

}
console.log(sortClass(arr));