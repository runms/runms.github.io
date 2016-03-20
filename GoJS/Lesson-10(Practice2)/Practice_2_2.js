/**  Created by Misha on 09.07.2015 */
getMaxNumber([1,30,40,2,7]); // 40
getMaxNumber([1,15,-20,2,-7]); // 15

function getMaxNumber(arr) {
    console.log (Math.max.apply(null,arr));
}
