function changeColor() {
    var div = window.getComputedStyle(document.getElementById('DivOne')).backgroundColor;


if (div === 'rgb(0, 0, 255)') {
    document.getElementById('DivOne').style.background = 'red';
} else {
    document.getElementById('DivOne').style.background = 'blue';
}};
