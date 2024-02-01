export default class GuessLetter {
    letter;
    isCorrectLetter;
    isCorrectPlace;
    constructor(letter) {
        this.letter = letter;
    }
    setCorrectLetter() {
        this.isCorrectLetter = true;
    }
    setCorrectPlace() {
        this.isCorrectPlace = true;
    }
    writeLetter() {
        const letterDiv = document.createElement('div');
        letterDiv.classList.add('letter');
        if (this.isCorrectLetter)
            letterDiv.style.color = 'blue';
        if (this.isCorrectPlace) {
            letterDiv.style.color = 'green';
            letterDiv.style.fontWeight = 'bold';
        }
        letterDiv.innerHTML = this.letter;
        return letterDiv;
    }
}
//# sourceMappingURL=GuessLetter.js.map