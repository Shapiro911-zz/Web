const paragraph = document.getElementById('output');
const timer = document.getElementById('timer');

export function printError(errorText) {
    paragraph.innerText = errorText;
};

export function printResult(result) {
    paragraph.innerText = `Years: ${result.years}
    Month: ${result.months}
    Days: ${result.days}`;
}

export function timerResult(time) {
    timer.innerText = time;
}