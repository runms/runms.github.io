/**
 * Created by Misha on 18.06.2015.
 */
var user = {
    surname: 'Petrov',
};
user.age = 30;
console.log(user)

/*next Task*/
function isEmpty(obj) {
    var counter = 0;
    for (var j in obj) {
        counter++;
    }
    counter = 0 ? console.log(true) : console.log(false)
}

/*zadacha 2*/

var salaries = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
};

var sum = 0;
for (var title in salaries) {
    sum += salaries[title];
}
console.log (sum)

/*zadacha 3*/

var fruits= ['apple','orange']; {
    fruits.push  ('kiwi');
    fruits[fruits.length-2] = 'pear';
    fruits.shift();
    fruits.unshift('apricot','peach')
};
console.log(fruits)

/*zadach 4*/



