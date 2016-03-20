/**  Created by Misha on 09.07.2015 */
function shuffle(arr) {
    arr.sort(function () {
        return Math.random() < 0.5 ? 1 : -1;
    });
    console.log(arr);
}

shuffle(['jj', 'my', 'your', 'our'])