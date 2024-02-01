import ClockDisplay from './ClockDisplay.js';
let clockDisplay;
window.addEventListener('load', () => {
    const time = document.getElementById('time');
    clockDisplay = new ClockDisplay(time);
    document.getElementById('setTime').addEventListener('click', () => {
        const hoursInput = document.getElementById('hours');
        const hours = Number.parseInt(hoursInput.value);
        const minutesInput = document.getElementById('minutes');
        const minutes = Number.parseInt(minutesInput.value);
        const secondsInput = document.getElementById('seconds');
        const seconds = Number.parseInt(secondsInput.value);
        clockDisplay.setTime(hours, minutes, seconds);
    });
    document.getElementById('tick').addEventListener('click', () => {
        clockDisplay.timeTick();
    });
});
//# sourceMappingURL=app.js.map