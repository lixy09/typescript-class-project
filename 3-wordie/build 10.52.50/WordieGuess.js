import GuessLetter from './GuessLetter.js';
export default class WordieGuess {
    letters = [];
    constructor(answer, guess) {
        const upperAnswer = answer.toUpperCase().split('');
        const upperGuess = guess.toUpperCase().split('');
        for (let i = 0; i < 5; i++) {
            this.letters[i] = new GuessLetter(upperGuess[i]);
            if (upperGuess[i] === upperAnswer[i]) {
                this.letters[i].setCorrectPlace();
                upperAnswer[i] = '';
            }
            else {
                for (let j = 0; j < 5; j++) {
                    if (upperGuess[i] === upperAnswer[j]) {
                        this.letters[i].setCorrectLetter();
                        upperAnswer[j] = '';
                    }
                }
            }
        }
    }
    writeGuess() {
        const guessDiv = document.createElement('div');
        guessDiv.classList.add('guess');
        for (let i = 0; i < this.letters.length; i++) {
            guessDiv.appendChild(this.letters[i].writeLetter());
        }
        return guessDiv;
    }
}
//# sourceMappingURL=WordieGuess.js.map