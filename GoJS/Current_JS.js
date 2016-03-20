/**  Created by Misha on 20.08.2015 */
var nato = (function() {
    var letters =  {
        "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
        "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
        "G": "Golf",   "H": "Hotel",   "I": "India",
        "J": "Juliett","K": "Kilo",    "L": "Lima",
        "M": "Mike",   "N": "November","O": "Oscar",
        "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
        "S": "Sierra", "T": "Tango",   "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "X-ray",
        "Y": "Yankee", "Z": "Zulu"
    };

    function validate(word) {
        var result  = [];
        var customWord = word.toUpperCase().split('');
        for (var char in letters) {
            if (customWord.indexOf(char)!=-1){
                result.push(char);
            }
        console.log(result)
        }
    }
    for (var char in letters){
        console.log (char)
    }
})();