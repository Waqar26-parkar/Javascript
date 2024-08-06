// Generate a random number between 1 and 100
const randomValue = Math.floor(Math.random() * 100) + 1;

// Selecting elements from the DOM
const userInput = document.querySelector('.guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

// Array to store previous guesses
let prevGuess = [];

// Number of guesses made
let numGuess = 1;

// Flag to control the game state
let playGame = true;

// Event listener for the submit button
if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. The random number was ${randomValue}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// Function to check the user's guess against the random number
function checkGuess(guess) {
    if (guess === randomValue) {
        displayMessage('You have guessed it correctly');
        endGame();
    } else if (guess < randomValue) {
        displayMessage('You have guessed a lower number');
    } else if (guess > randomValue) {
        displayMessage('You have guessed a greater number');
    }
}

// Function to display the user's guess
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

// Function to display messages
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    startGame();
}

// Function to start a new game
function startGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomValue = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
