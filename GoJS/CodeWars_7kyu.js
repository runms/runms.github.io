/* Add property to every object in array */

/*function addUserAnswer(questions) {
 questions.forEach(function (obj) {
 obj.userAnswer = null;
 }); return questions;}
 var questions = [{
 question: "What's the currency of the USA?",
 choices: ["US dollar", "Ruble", "Horses", "Gold"],
 corAnswer: 0
 }, {
 question: "Where was the American Declaration of Independence signed?",
 choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
 corAnswer: 0
 }];
 addUserAnswer(questions);
 console.log (questions[0].userAnswer === null)*/

// Find Your Villain Name

/*function getVillainName(birthday) {
 var month=[
 "The Evil",
 "The Vile",
 "The Cruel",
 "The Trashy",
 "The Despicable",
 "The Embarrassing",
 "The Disreputable",
 "The Atrocious",
 "The Twirling",
 "The Orange",
 "The Terrifying",
 "The Awkward"
 ];
 var date =[
 "Mustache",
 "Pickle",
 "Hood Ornament",
 "Raisin",
 "Recycling Bin",
 "Potato",
 "Tomato",
 "House Cat",
 "Teaspoon",
 "Laundry Basket"
 ];
 return month[birthday.getMonth()] + ' ' + date[birthday.getDate().substring(-1)];
 }*/

// More than one way to call a function, or skin a cat
//Write a single function that can be invoked by either

/*function sum (a,b){
 return sum.arguments.length<2 ?
     function(noName){return a+noName;}:
     a+b;
}
console.log (sum(3,5));*/

//Case swapping
/*function swap(str) {
 var swapStr = str.split('');
 var newArr = [];
 swapStr.forEach(function(item, i, arr){
    if (item.charCodeAt()<=90 && item.charCodeAt()>=65){
     newArr.push(item.toLowerCase());
    }
  else newArr.push(item.toLocaleUpperCase());
 });
 return (newArr.join(''));
 //console.log (newArr.join(''))
}
swap('HelloWorld');
swap('CodeWars');*/

//Descending Order

//varian#1
/*function descendingOrder(n){
 var j = n.toString().split('');
 j.sort(function(a, b) {
  return b-a});
 console.log(j.join(''))
}
descendingOrder(11456455641);*/
// variant#2
/*
 function descendingOrder(n){
 return +n.toString().split('').sort().reverse().join('');
 }
 console.log (descendingOrder(11456455641));*/
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
 for (var char in customWord) {
  if (letters[char]){
   result.push(letters[char]);
  }
  console.log(result)
 }
}

validate('bc')