import NumberDisplay from "./NumberDisplay.js";
export default class ClockDisplay {
    display;
    hours;
    minutes;
    seconds;
    constructor(display) {
        this.display = display;
        this.hours = new NumberDisplay(24);
        this.minutes = new NumberDisplay(60);
        this.seconds = new NumberDisplay(60);
    }
    timeTick() {
        this.seconds.increment();
        if (this.seconds.getValue() === 0) {
            this.minutes.increment();
            if (this.minutes.getValue() === 0) {
                this.hours.increment();
            }
        }
        this.updateDisplay();
    }
    setTime(hours, minutes, seconds) {
        this.hours.setValue(hours);
        this.minutes.setValue(minutes);
        this.seconds.setValue(seconds);
        this.updateDisplay();
    }
    updateDisplay() {
        this.display.innerHTML = `${this.hours.getValue()} : ${this.minutes.getValue()} : ${this.seconds.getValue()}`;
    }
}
//# sourceMappingURL=ClockDisplay.js.map