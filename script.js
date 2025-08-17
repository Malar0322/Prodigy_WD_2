let startTime, updatedTime, difference = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsList = document.getElementById("laps");

// Start / Pause Stopwatch
startPauseBtn.addEventListener("click", () => {
    if (!running) {
        startTime = new Date().getTime() - difference;
        timerInterval = setInterval(updateTime, 10);
        startPauseBtn.textContent = "Pause";
        running = true;
    } else {
        clearInterval(timerInterval);
        difference = new Date().getTime() - startTime;
        startPauseBtn.textContent = "Start";
        running = false;
    }
});

// Reset Stopwatch
resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    display.textContent = "00:00:00";
    startPauseBtn.textContent = "Start";
    lapsList.innerHTML = "";
});

// Lap Time
lapBtn.addEventListener("click", () => {
    if (running) {
        const li = document.createElement("li");
        li.textContent = display.textContent;
        lapsList.appendChild(li);
    }
});

// Update Display
function updateTime() {
    updatedTime = new Date().getTime() - startTime;

    let hours = Math.floor((updatedTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((updatedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((updatedTime / 1000) % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.textContent = `${hours}:${minutes}:${seconds}`;
}
