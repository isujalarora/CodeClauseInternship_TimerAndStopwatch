// Timer
const timerInput = document.getElementById('timerInput');
const startTimerButton = document.getElementById('startTimer');
const timerDisplay = document.getElementById('timerDisplay');
let timerInterval;

startTimerButton.addEventListener('click', () => {
    const time = parseInt(timerInput.value);
    if (!isNaN(time)) {
        startTimer(time);
    }
});

function startTimer(seconds) {
    clearInterval(timerInterval);

    let remainingTime = seconds;
    updateTimerDisplay(remainingTime);

    timerInterval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert('Timer expired!');
        }
    }, 1000);
}

function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Stopwatch
const startStopwatchButton = document.getElementById('startStopwatch');
const stopStopwatchButton = document.getElementById('stopStopwatch');
const stopwatchDisplay = document.getElementById('stopwatchDisplay');
let stopwatchInterval;
let stopwatchTime = 0;

startStopwatchButton.addEventListener('click', () => {
    startStopwatch();
});

stopStopwatchButton.addEventListener('click', () => {
    stopStopwatch();
});

function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        updateStopwatchDisplay(stopwatchTime);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function updateStopwatchDisplay(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    stopwatchDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
