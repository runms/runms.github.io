/**  Created by Misha on 15.07.2015 */
/*
/!*Task2*!/

function checkSpam(anyStr) {
    console.log(anyStr.toLowerCase().indexOf("spam") !== -1 || anyStr.toLowerCase().indexOf("sex") !== -1);
}
checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false*/

/*Task3*/
function slicer(anyStr){
    anyStr.length <=20 ? console.log (anyStr) : console.log (anyStr.substring(0,19)+"...");
}

slicer("ddddddsffffffffffffdsfdsfdsfsdf4sd65f4f65g4d6f5g")