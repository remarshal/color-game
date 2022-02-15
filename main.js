const colors = [
    'rgb(255, 255, 0)',
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(0, 255, 255)',
    'rgb(138, 43, 226)'
];

const squares = document.getElementsByClassName('squares')
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}
