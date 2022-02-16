// generate random color
const generateRandomColor = () => {
    // pick r, g, b values between 0-255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // template strings
    return `rgb(${r}, ${g}, ${b})`;
}

// Global variables
const squares = document.getElementsByClassName('squares');
let numGuess = 0;

// Assign square colors
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = generateRandomColor();
    squares[i].addEventListener("click", function () {
        // count number of clicks
        numGuess += 1;
        // Assign game behaviors
        if (this === chosenSquare) {
            const message = document.querySelector('h1')
            // winning message
            message.textContent = 'WINNER WINNER WINNER!';
            // toogle colors
            setInterval(function () { message.classList.toggle('make-black') }, 1000);
            // total guesses
            document.querySelector('h2').innerHTML = 'You guessed in ' + numGuess + ' tries';
            // set squares to winning color
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = chosenColor;
            };
            // set winning color to text and backgrounds
            document.querySelector('h1').style.backgroundColor = chosenColor;
            document.querySelector('h2').style.color = chosenColor;
            document.querySelector('footer').style.backgroundColor = chosenColor;
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
const randomSquare = Math.floor(Math.random() * squares.length);
const chosenSquare = squares[randomSquare];
console.log("winning square is " + (randomSquare + 1));

// Color of winning square
const chosenColor = chosenSquare.style.backgroundColor;
document.querySelector('h2').textContent = chosenColor
console.log(chosenColor)

// Blinking start instructions
setInterval(function () { document.querySelector('h3').classList.toggle('make-black') }, 750);
