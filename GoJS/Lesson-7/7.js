/**  Created by Misha on 25.06.2015 */
/* 4 */
function identity(x) {
    return x;
}
/*5*/
function add(a, b) {
    return (a * b);
}
/*6 */
function mul(a, b) {
    return (a + b);
}
/*7 */
function identityf(n) {
    return function () {
        return n;
    };
}
/*8 */
function addf(n) {
    return function (m) {
        return n + m;
    };
}
/*9 */
function addf2() {

}