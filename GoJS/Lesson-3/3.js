var browser
if (browser === 'IE') {
    alert('�, �� ���� IE');
}
else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('������� ����');
}
else {
    alert('��� �����?')
}

var a
for (a = 0; a < 11; a++) {
    if (a % 2 === 0) {
        console.log(a)
    }
}

var a = '';
for (i = 0; i < 8; i++) {
    console.log(a += '#');
}

function calcSum(first, second) {
    return first + second;
}

function calcMin(first, second) {
    if (first < second) {
        return first;
    } else {
        return second;
    }


}



