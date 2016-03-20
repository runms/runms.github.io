/**  Created by Misha on 09.07.2015 */
function searchLongest(str) {
    var maxLenth = str.split(' ');
    maxLenth = maxLenth.sort(sorting);
    function sorting(a,b) {
        return a.length < b.length ? 1 : -1;
    }
    console.log (maxLenth[0]);
}
searchLongest('Web Development Tutorial');