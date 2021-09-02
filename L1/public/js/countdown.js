import { DateTime, Duration } from 'https://moment.github.io/luxon/es6/luxon.min.js'
import { timerResult } from './output.js'

let countTime, updatedTime;
export function start(hours, mins, secs) {
    let currentTime;
    if (document.getElementById('timer').innerText == '') {
        updatedTime = DateTime.local();
        countTime = DateTime.local().plus({ hours: hours, minutes: mins, seconds: secs });
    };
    timer = setInterval(() => {
        currentTime = countTime.diff(updatedTime).toObject();
        updatedTime = DateTime.fromISO(updatedTime).plus({ seconds: 1 });
        timerResult(Duration.fromObject(currentTime).toFormat('hh:mm:ss'));
        if (currentTime.milliseconds <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

export function stop() {
    clearInterval(timer);
}