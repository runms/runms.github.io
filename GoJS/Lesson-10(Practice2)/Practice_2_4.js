/**  Created by Misha on 09.07.2015 */
function upper(str){
    var words = str.split(' ');
    for (i=0; i<words.length; i++) {
        var letters = words[i].split('');
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join('');
    } console.log (words.join(' '));
}

upper('the quick brown fox');