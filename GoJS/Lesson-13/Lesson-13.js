/**  Created by Misha on 21.07.2015 */
function User() {
    var firstName = '';
    var surName = '';
    this.setFirstName = function (newFirstName){
        firstName = newFirstName;
    };

    this.setSurName = function (newSurName){
        surName = newSurName;
    };
    this.getFullName = function() {
        return firstName + ' ' + surName;
    }
}
var user = new User();
user.setFirstName('Mikel');
user.setSurName('Phalps');
console.log (user.getFullName());