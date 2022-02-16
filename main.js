const colors = [
    'rgb(255, 255, 0)',
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(0, 255, 255)',
    'rgb(138, 43, 226)'
];

// Global variables
const squares = document.getElementsByClassName('squares');
let numGuess = 0;

// Assign square colors
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        // count number of clicks
        numGuess += 1;
        // Assign game behaviors
        if (this === chosenSquare) {
            const message = document.querySelector('h1')
            message.textContent = 'WINNER WINNER WINNER!';
            message.classList.add('make-red');
            document.querySelector('h2').innerHTML = 'You guessed in ' + numGuess + ' tries';
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = chosenColor;
            };
            // start over button
            const resetBtn = document.createElement('button');
            resetBtn.innerText = 'Start Over?';
            resetBtn.classList.add('reset-btn');
            document.querySelector('h3').replaceWith(resetBtn)
            // start over button reload page
            resetBtn.addEventListener('click', function () {
                location.reload();
            })
        } else {
            this.style.backgroundColor = 'white';
        }
    })
}

// Winning square
const randomSquare = Math.floor(Math.random() * 6);
const chosenSquare = squares[randomSquare];
console.log("winning square is " + (randomSquare + 1));

// Color of winning square
const chosenColor = chosenSquare.style.backgroundColor;
document.querySelector('h2').textContent = chosenColor
