// Metrics database
let inputVal = 0;

let velocity = ['Miles per hour', 'KM per hour'];
let milesToKm = inputVal * 1.609;
let kmToMiles = inputVal / 1.609;

let temperature = ['Celsius', 'Fahrenheit', 'Kelvin'];
// Base celsius
let celsiusToFahreneit = (inputVal * 1.8) + 32;
let celsiusToKelvin = inputVal + 273.15;
// Base fahreinheit
let fahrenheitToCelsius = (inputVal - 32) * 0.55;
let fahrenheitToKelvin = (inputVal - 32) * 0.55 + 273.15;
// Base kelvin
let kelvinToCelsius = inputVal - 273.15;
let kelvinToFahrenheit = (inputVal - 273.15) * 1.8 + 32;

let time = ['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months', 'Years'];
// Base seconds
let secondsToMinutes = inputVal / 60;
let secondsToHours = inputVal / 3600;
let secondsToDays = inputVal / 86400;
let secondsToWeeks = inputVal / 604800;
let secodnsToMonths = (inputVal / 3600) / 730;
let secondsToYears = (inputVal / 3600) / 8760;
// Base minutes
let minutesToSeconds = inputVal * 60;
let minutesToHours = inputVal / 60;
let minutesToDays = inputVal / 1440;
let minutesToWeeks = inputVal / 10080;
let minutesToMonths = (inputVal / 60) / 730;
let minutesToYears = (inputVal / 60) / 8760;
// Base hours
let hoursToSeconds = inputVal * 3600;
let hoursToMinutes = inputVal * 60;
let hoursToDays = inputVal / 24;
let hoursToWeeks = inputVal / 168;
let hoursToMonths = inputVal / 730;
let hoursToYears = inputVal / 8760;
// Base days
let daysToSeconds = inputVal * 86400;
let daysToMinutes = inputVal * 1440;
let daysToHours = inputVal * 24;
let daysToWeeks = inputVal / 7;
let daysToMonths = inputVal / 30.41;
let daysToYears = inputVal / 365;
// Base weeks
let weeksToSeconds = inputVal * 604800;
let weeksToMinutes = inputVal * 10080;
let weeksToHours = inputVal * 168;
let weeksToDays = inputVal * 7;
let weeksToMonths = inputVal / 4.345;
let weeksToYears = inputVal / 52.143;
// Base months
let monthsToSeconds = (inputVal * 730) * 3600;
let monthsToMinutes = (inputVal * 730) * 60;
let monthsToHours = inputVal * 730;
let monthsToDays = inputVal * 30.41;
let monthsToWeeks = inputVal * 345;
let monthsToYears = inputVal / 12;
// Base years
let yearsToSeconds = (inputVal * 365) * 86400;
let yearsToMinutes = (inputVal * 365) * 1440;
let yearsToHours = inputVal * 8760;
let yearsToDays = inputVal * 365;
let yearsToWeeks = inputVal * 52.143;
let yearsToMonths = inputVal * 12;

let scale = ['Centimetres', 'Meters', 'Kilometers', 'Miles', 'Inches', 'Feets', 'Yards'];
// Base centimetres
let centimetresToMeters = inputVal / 100;
let centimetresToKilometers = inputVal / 100000;
let centimetresToMiles = inputVal / 160934;
let centimetresToInches = inputVal / 2.54;
let centimetresToFeets = inputVal / 30.48;
let centimetresToYards = inputVal / 91.44;
// Base meters

// Base kilometers

// Base miles

// Base inches

// Base feets

// Base yards

let weight = ['Tonne', 'Kilos', 'Grams', 'Milligrams', 'Ounce', 'Pounds'];
// Base tonne

// Base kilos

// Base grams

// Base miligrams

// Base ounce

// Base pounds

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
    if (timerSeconds <= 0 || timerSeconds < 0) {
        clearInterval(timerDecres)
        // call new question
        // add incorrect answer
        // start timer again         
    }
}, 1000);
}

// Create the new question and the answers
function newQuestion() {
    let questionNumb = 01;
    let questionCounter = document.getElementById('question-counter');
    questionCounter.innerHTML = `Question ${questionNumb}`;

    let questionDescription = document.getElementById('question-diplay');

    let answersOptions
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

    // Create a question and aswers
    newQuestion();

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