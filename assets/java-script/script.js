// Metrics database
let inputVal = 0;

let categories = ['speed', 'temperature', 'time', 'scale', 'weight'];

let speed = ['Miles per hour', 'KM per hour'];
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
// Base centimeters
let centimetersToMeters = inputVal / 100;
let centimetersToKilometers = inputVal / 100000;
let centimetersToMiles = inputVal / 160934;
let centimetersToInches = inputVal / 2.54;
let centimetersToFeets = inputVal / 30.48;
let centimetersToYards = inputVal / 91.44;
// Base meters
let metersToCentimeters = inputVal * 100;
let metersToKilometers = inputVal / 1000;
let metersToMiles = inputVal / 1609;
let metersToInches = inputVal * 39.37;
let metersToFeets = inputVal * 3.281;
let metersToYards = inputVal * 1.094;
// Base kilometers
let kilometersToCentimeters = inputVal * 100000;
let kilometersToMeters = inputVal * 1000;
let kilometersToMiles = inputVal / 1.609;
let kilometersToInches = inputVal * 39370;
let kilometersToFeets = inputVal * 3281;
let kilometersToYards = inputVal * 1094;
// Base miles
let milesToCentimeters = inputVal * 160934;
let milesToMeters = inputVal * 1609;
let milesToKilometers = inputVal * 1.609;
let milesToInches = inputVal * 63360;
let milesToFeets = inputVal * 5280;
let milesToYards = inputVal * 1760;
// Base inches
let inchesToCentimeters = inputVal * 2.54;
let inchesToMeters = inputVal / 39.37;
let inchesToKilometers = inputVal / 39370;
let inchesToFeets = inputVal / 12;
let inchesToYards = inputVal / 36;
// Base feets
let feetsToCentimeters = inputVal * 30.48;
let feetsToMeters =  inputVal / 3.281;
let feetsToKilometers = inputVal / 3281;
let feetsToInches = inputVal * 12;
let feetsToYards = inputVal / 3;
// Base yards
let yardsToCentimeters = inputVal * 91.44;
let yardsToMeters = inputVal / 1.094
let yardsToKilometers = inputVal / 1094;
let yardsToMiles = inputVal / 1760;
let yardsToInches = inputVal * 36;
let yardsToFeets = inputVal * 3;

let weight = ['Tonne', 'Kilos', 'Grams', 'Milligrams', 'Ounce', 'Pounds'];
// Base tonne
let tonneToKilos = inputVal * 1000;
let tonneToGrams = (inputVal * 1000) * 1000;
let tonneToMilligrams = (inputVal * 1000) * 1000000;
let tonneToOunce = inputVal * 35274;
let tonneToPounds = inputVal * 2205;
// Base kilos
let kilosToTonne = inputVal / 1000;
let kilosToGrams = inputVal * 1000;
let kilosToMilligrams = (inputVal * 1000) * 1000;
let kilosToOunce = inputVal * 35.275;
let kilosToPounds = inputVal * 2.205;
// Base grams
let gramsToTonne = (inputVal / 1000) / 1000;
let gramsToKilos = inputVal / 1000
let gramsToMilligrams = inputVal * 1000;
let gramsToOunce = inputVal / 28.35;
let gramsToPounds = inputVal / 454;
// Base milligrams
let milligramsToTonne = (inputVal / 1000) / 1000000;
let milligramsToKilos = (inputVal / 1000) / 1000;
let milligramsToGrams = inputVal / 1000;
let milligramsToOunce = inputVal / 28350;
let milligramsToPounds = inputVal / 453592;
// Base ounce
let ounceToTonne = inputVal / 35274;
let ounceToKilos = inputVal / 35.274;
let ounceToGrams = inputVal * 28.35;
let ounceToMilligrams = inputVal * 28350;
let ounceToPounds = inputVal / 16;
// Base pounds
let poundsToTonne = inputVal / 2205;
let poundsToKilos = inputVal / 2.205;
let poundsToGrams = inputVal * 454;
let poundsToMilligrams = inputVal * 453592;
let poundsToOunce = inputVal * 16;

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
    // random number to the question
    let randomNumb = Math.floor(Math.random() * 100)

    // define the category and metrics to the question
    let categories = ['speed', 'temperature', 'time', 'scale', 'weight'];
    let randomCategory = categories[Math.floor(Math.random() * categories.length)];
    randomCategory;

    if (randomCategory === 'speed') {
        let randomMetric = speed[Math.floor(Math.random() * speed.length)];
        randomMetric;
    } else if (randomCategory === 'temperature') {
        let randomMetric = temperature[Math.floor(Math.random() * temperature.length)];
        randomMetric;
    } else if (randomCategory === 'time') {
        let randomMetric = time[Math.floor(Math.random() * time.length)];
        randomMetric; 
    } else if (randomCategory === 'scale') {
        let randomMetric = scale[Math.floor(Math.random() * scale.length)];
    randomMetric;
    } else {
        let randomMetric = weight[Math.floor(Math.random() * weight.length)];
        randomMetric;
    }

    // Question number counter
    let questionNumb = 01;
    let questionCounter = document.getElementById('question-counter');
    questionCounter.innerHTML = `Question ${questionNumb} - Category ${randomCategory}`;

    let questionDescription = document.getElementById('question-diplay');
    questionDescription.innerHTML = `${randomNumb} ${randomMetric} corresponds to how many ${randomMetric2}?`;

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