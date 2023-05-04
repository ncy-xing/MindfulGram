let maxMinutes = 0;
let interval = null;

/*
 * Sets time limit into local storage. Used in settings.
 */
function setTimer() {
    var input = document.getElementById("endtime").value;
    maxMinutes = parseInt(input);
    sessionStorage.setItem('maxMinutes', maxMinutes);
}

/*
 * Initialize display timer to limit found in local storage. Used in homepage.
 */
function initializeTimer() {
    maxMinutes = sessionStorage.getItem('maxMinutes');
    if (maxMinutes > 0) {
        document.getElementById('countdown-number').textContent = maxMinutes + "m";
    } else {
        document.getElementById('countdown-number').textContent = "--"; // Limit off 
    }
}

/*
 * Runs countdown timer, updating animation for timer and moving to end screen on finish.
 */
function runTimer() {
    if (maxMinutes > 0) {
        maxMinutes = sessionStorage.getItem('maxMinutes');
        let minRemaining = maxMinutes
        let countdownSec = maxMinutes * 60;
        let countdownNumberEl = document.getElementById('countdown-number');

        document.getElementById("countdown-circle").style.animation = "countdown " + countdownSec + "s linear forwards";

        // Prepare end screen
        setTimeout(endSession, countdownSec * 1000);
        // Update time remaining text
        let interval = setInterval(function () {
            countdownNumberEl.textContent = --minRemaining + "m";
        }, 60000);
        setTimeout(clearInterval(interval), countdownSec * 1000);
    }

}

/*
 * Redirects page to end session page.
 */
function endSession() {
    window.location.replace("end.html");
}

