// converter.html functions

/**
 * Receives the value of metric 1 and returns the conversation for metric 2.
 */
function convertMetrics() {

}

/**
 * Exchanges metric 1 for metric 2.
 */
function swapMetrics() {

}

/**
 * Clear all the values.
 */
function clearMetrics() {

}

// quiz-game.html functions

// Timer function
function timerStart() {
let timerSeconds = 30;
let timerCountdown = document.getElementById('timer');
timerCountdown.innerHTML = `Timer: ${timerSeconds}`;
let timerDecres = setInterval (()=>{
    timerSeconds--;
    timerCountdown.innerHTML = `Timer: ${timerSeconds}`;
    if (timerSeconds <= 0 || timerSeconds < 1) {
        clearInterval(timerDecres)
        // call new question
        // add incorrect answer
        // start timer again         
    }
}, 1000);
}

/**
 * Start or restart the game, show the first question,
 * show 3 answers options, resets the counters to zero,
 * and starts the timer in 30 seconds (countdown). 
 */
function startRestart() {
    // Remove rules
    let cleanRules = document.getElementById('rules-box');
    cleanRules.parentNode.removeChild(cleanRules);

    // Reset the counters to zero
    let correctReset = document.getElementById('correct-score').innerHTML = "Correct Answers: 00";
    let incorrectReset = document.getElementById('incorrect-score').innerHTML = "Incorrect Answers: 00";

    // Start the timer
    timerStart();
    // Create a question
    
    // Create the anwers
}

/**
 * Stop the game and shows the answers report.
 */
function stopReport() {

}

/**
 * Receives the player's answer,
 * returns whether it is correct or incorrect and increments the score,
 * shows the next question and answers,
 * restarts the counter at 30 seconds.
 */
function answerFeedback() {

}