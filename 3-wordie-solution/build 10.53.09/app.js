import Wordie from './Wordie.js';
const guessInput = document.getElementById('inputGuess');
const guessButton = document.getElementById('makeguess');
const resetButton = document.getElementById('restart');
const guessDiv = document.getElementById('guesses');
const guessesLeftSpan = document.getElementById('guessesLeftNumber');
const correctAnswerDiv = document.getElementById('answer');
let wordie;
function updateDisplay() {
    guessDiv.innerHTML = wordie.getGuesses();
    guessesLeftSpan.innerHTML = wordie.getGuessesLeft().toString();
    if (wordie.getGuessesLeft() === 0) {
        correctAnswerDiv.innerHTML = `Correct word: <strong>${wordie.getAnswer()}</strong>`;
    }
}
function makeGuess() {
    wordie.makeGuess(guessInput.value);
    guessInput.value = '';
    updateDisplay();
}
function startNewGame() {
    wordie = new Wordie();
    updateDisplay();
}
resetButton.addEventListener('click', () => {
    startNewGame();
});
guessButton.addEventListener('click', () => {
    makeGuess();
});
window.addEventListener('keypress', (ev) => {
    if (ev.key === 'Enter') {
        makeGuess();
    }
});
window.addEventListener('load', () => {
    startNewGame();
});
//# sourceMappingURL=app.js.map