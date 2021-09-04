import { printError, printResult } from "./output.js";
import calcDateDiff from "./calcDateDiff.js";
import { start, stop } from "./countdown.js"
import { changeSection } from "./changeSection.js";

const form = document.getElementById('calcDate');

form.onsubmit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dateFrom = formData.get('dateFrom');
    const dateTo = formData.get('dateTo');

    if (!dateFrom || !dateTo) {
        printError('Error');
        return;
    };

    const dateDiff = calcDateDiff(dateFrom, dateTo);
    printResult(dateDiff);
}

const playButton = document.getElementById('play');

playButton.onclick = function (event) {
    event.preventDefault();

    if (playButton.classList.contains('active')) {
        playButton.classList.toggle('active');
        playButton.innerText = "Play";
        stop();
    }
    else {
        const hours = document.getElementById('hourInput').value;
        const mins = document.getElementById('minInput').value;
        const secs = document.getElementById('secInput').value;
        playButton.classList.toggle('active');
        playButton.innerText = "Stop";
        start(hours, mins, secs);
    }
}

const changeSectionButtons = document.querySelectorAll('.changeSectionButton');
changeSectionButtons.forEach((changeSectionButton) => {
    changeSectionButton.addEventListener('click', function (event) {
        changeSection(changeSectionButtons, event.target);
    })
});