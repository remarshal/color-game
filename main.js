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
    squares[i].addEventListener("click", function () {
        if (this === chosenSquare) {
            const message = document.querySelector('h1').textContent = 'WINNER WINNER WINNER!'
            document.querySelector('h2').innerHTML = 'You guessed in <span id="numTries">2</span> tries'
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = chosenColor
            };
        } else {
            this.style.backgroundColor = 'white';
        }
    })
}

const chosenSquare = squares[0];
const chosenColor = chosenSquare.style.backgroundColor