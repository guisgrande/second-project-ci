// Metrics database
let inputVal = 0;

let categories = ['speed', 'temperature', 'time', 'scale', 'weight'];

let speed = ['Miles per hour', 'KM per hour'];
let temperature = ['Celsius', 'Fahrenheit', 'Kelvin'];
let time = ['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months', 'Years'];
let scale = ['Centimetres', 'Meters', 'Kilometers', 'Miles', 'Inches', 'Foot', 'Yards'];
let weight = ['Tonne', 'Kilos', 'Grams', 'Milligrams', 'Ounce', 'Pounds'];

function speedConvert() {
// Speed base convertion
if (metric1 === 'Miles per hour' && metric2 === 'KM per hour') {
    result.value = inputVal * 1.609;
} else {
    result.value = inputVal / 1.609;
};
};

function temperatureConvert() {
// Temperature base convertion
if (metric1 === 'Celsius' && metric2 === 'Fahrenheit') {
    result.value = (inputVal * 1.8) + 32;
} else if (metric1 === 'Celsius' && metric2 ==='Kelvin') {
    result.value = inputVal + 273.15;
} else if (metric1 === 'Fahrenheit' && metric2 === 'Celsius') {
    result.value = (inputVal - 32) * 0.55;
} else if (metric1 === 'Fahrenheit' && metric2 === 'Kelvin') {
    result.value = (inputVal - 32) * 0.55 + 273.15;
} else if (metric1 === 'Kelvin' && metric2 === 'Celsius') {
    result.value = inputVal - 273.15;
} else {
    result.value = (inputVal - 273.15) * 1.8 + 32;
};
};

// Time base convert
function timeConvert {
// seconds
if (metric1 === 'Seconds' && metric2 === 'Minutes') {
    result.value = inputVal / 60;
} else if (metric1 === 'Seconds' && metric2 === 'Hours') {
    result.value = inputVal / 3600;
} else if (metric1 === 'Seconds' && metric2 === 'Days') {
    result.value = inputVal / 86400;
} else if (metric1 === 'Seconds' && metric2 === 'Weeks') {
    result.value = inputVal / 604800;
} else if (metric1 === 'Seconds' && metric2 === 'Months') {
    result.value = (inputVal / 3600) / 730;
} else if (metric1 === 'Seconds' && metric2 === 'Years') {
    result.value = (inputVal / 3600) / 8760;
// minutes
} else if (metric1 === 'Minutes' && metric2 === 'Seconds') {
    result.value = inputVal * 60;
} else if (metric1 === 'Minutes' && metric2 === 'Hours') {
    result.value = inputVal / 60;
} else if (metric1 === 'Minutes' && metric2 === 'Days') {
    result.value = inputVal / 1440;
} else if (metric1 === 'Minutes' && metric2 === 'Weeks') {
    result.value = inputVal / 10080;
} else if (metric1 === 'Minutes' && metric2 === 'Months') {
    result.value = (inputVal / 60) / 730;
} else if (metric1 === 'Minutes' && metric2 === 'Years') {
    result.value = (inputVal / 60) / 8760;
// hours
} else if (metric1 === 'Hours' && metric2 === 'Seconds') {
    result.value = inputVal * 3600;
} else if (metric1 === 'Hours' && metric2 === 'Minutes') {
    result.value = inputVal * 60;
} else if (metric1 === 'Hours' && metric2 === 'Days') {
    result.value = inputVal / 24;
} else if (metric1 === 'Hours' && metric2 === 'Weeks') {
    result.value = inputVal / 168;
} else if (metric1 === 'Hours' && metric2 === 'Months') {
    result.value = inputVal / 730;
} else if (metric1 === 'Hours' && metric2 === 'Years') {
    result.value = inputVal / 8760;
// days
} else if (metric1 === 'Days' && metric2 === 'Seconds') {
    result.value = inputVal * 86400;
} else if (metric1 === 'Days' && metric2 === 'Minutes') {
    result.value = inputVal * 1440;
} else if (metric1 === 'Days' && metric2 === 'Hours') {
    result.value = inputVal * 24;
} else if (metric1 === 'Days' && metric2 === 'Weeks') {
    result.value = inputVal / 7;
} else if (metric1 === 'Days' && metric2 === 'Months') {
    result.value = inputVal / 30.41;
} else if (metric1 === 'Days' && metric2 === 'Years') {
    result.value = inputVal / 365;
//  weeks
} else if (metric1 === 'Weeks' && metric2 === 'Seconds') {
    result.value = inputVal * 604800;
} else if (metric1 === 'Weeks' && metric2 === 'Minutes') {
    result.value = inputVal * 10080;
} else if (metric1 === 'Weeks' && metric2 === 'Hours') {
    result.value = inputVal * 168;
} else if (metric1 === 'Weeks' && metric2 === 'Days') {
    result.value = inputVal * 7;
} else if (metric1 === 'Weeks' && metric2 === 'Months') {
    result.value = inputVal / 4.345;
} else if (metric1 === 'Weeks' && metric2 === 'Years') {
    result.value = inputVal / 52.143;
// months
} else if (metric1 === 'Months' && metric2 === 'Seconds') {
    result.value = (inputVal * 730) * 3600;
} else if (metric1 === 'Months' && metric2 === 'Minutes') {
    result.value = (inputVal * 730) * 60;
} else if (metric1 === 'Months' && metric2 === 'Hours') {
    result.value = inputVal * 730;
} else if (metric1 === 'Months' && metric2 === 'Days') {
    result.value = inputVal * 30.41;
} else if (metric1 === 'Months' && metric2 === 'Weeks') {
    result.value = inputVal * 345;
} else if (metric1 === 'Months' && metric2 === 'Years') {
    result.value = inputVal / 12;
// years
} else if (metric1 === 'Years' && metric2 === 'Seconds') {
    result.value = (inputVal * 365) * 86400;
} else if (metric1 === 'Years' && metric2 === 'Minutes') {
    result.value = (inputVal * 365) * 1440;
} else if (metric1 === 'Years' && metric2 === 'Hours') {
    result.value = inputVal * 8760;
} else if (metric1 === 'Years' && metric2 === 'Days') {
    result.value = inputVal * 365;
} else if (metric1 === 'Years' && metric2 === 'Weeks') {
    result.value = inputVal * 52.143;
} else {
    result.value = inputVal * 12;
};
};

// Scale base convert
function scaleConvert() {
// centimeters
if (metric1 === 'Centimeters' && metric2 === 'Meters') {
    result.value = inputVal / 100;
} else if (metric1 === 'Centimeters' && metric2 === 'Kilometers') {
    result.value = inputVal / 100000;
} else if (metric1 === 'Centimeters' && metric2 === 'Miles') {
    result.value = inputVal / 160934;
} else if (metric1 === 'Centimeters' && metric2 === 'Inches') {
    result.value = inputVal / 2.54;
} else if (metric1 === 'Centimeters' && metric2 === 'Foot') {
    result.value = inputVal / 30.48;
} else if (metric1 === 'Centimeters' && metric2 === 'Yards') {
    result.value = inputVal / 91.44;
// meters
} else if (metric1 === 'Meters' && metric2 === 'Centimeters') {
    result.value = inputVal * 100;
} else if (metric1 === 'Meters' && metric2 === 'Kilometers') {
    result.value = inputVal / 1000;
} else if (metric1 === 'Meters' && metric2 === 'Miles') {
    result.value = inputVal / 1609;
} else if (metric1 === 'Meters' && metric2 === 'Inches') {
    result.value = inputVal * 39.37;
} else if (metric1 === 'Meters' && metric2 === 'Foot') {
    result.value = inputVal * 3.281;
} else if (metric1 === 'Meters' && metric2 === 'Yards') {
    result.value = inputVal * 1.094;
// kilometers
} else if (metric1 === 'Kilometers' && metric2 === 'Centimeters') {
    result.value = inputVal * 100000;
} else if (metric1 === 'Kilometers' && metric2 === 'Meters') {
    result.value = inputVal * 1000;
} else if (metric1 === 'Kilometers' && metric2 === 'Miles') {
    result.value = inputVal / 1.609;
} else if (metric1 === 'Kilometers' && metric2 === 'Inches') {
    result.value = inputVal * 39370;
} else if (metric1 === 'Kilometers' && metric2 === 'Foot') {
    result.value = inputVal * 3281;
} else if (metric1 === 'Kilometers' && metric2 === 'Yards') {
    result.value = inputVal * 1094;
// miles
} else if (metric1 === 'Miles' && metric2 === 'Centimeters') {
    result.value = inputVal * 160934;
} else if (metric1 === 'Miles' && metric2 === 'Meters') {
    result.value = inputVal * 1609;
} else if (metric1 === 'Miles' && metric2 === 'Kilometers') {
    result.value = inputVal * 1.609;
} else if (metric1 === 'Miles' && metric2 === 'Inches') {
    result.value = inputVal * 63360;
} else if (metric1 === 'Miles' && metric2 === 'Foot') {
    result.value = inputVal * 5280;
} else if (metric1 === 'Miles' && metric2 === 'Yards') {
    result.value = inputVal * 1760;
// inches
} else if (metric1 === 'Inches' && metric2 === 'Centimeters') {
    result.value = inputVal * 2.54;
} else if (metric1 === 'Inches' && metric2 === 'Meters') {
    result.value = inputVal / 39.37;
} else if (metric1 === 'Inches' && metric2 === 'Kilometers') {
    result.value = inputVal / 39370;
} else if (metric1 === 'Inches' && metric2 === 'Miles') {
    result.value = inputVal / 63360;
} else if (metric1 === 'Inches' && metric2 === 'Foot') {
    result.value = inputVal / 12;
} else if (metric1 === 'Inches' && metric2 === 'Yards') {
    result.value = inputVal / 36;
// foot
} else if (metric1 === 'Foot' && metric2 === 'Centimeters') {
    result.value = inputVal * 30.48;
} else if (metric1 === 'Foot' && metric2 === 'Meters') {
    result.value =  inputVal / 3.281;
} else if (metric1 === 'Foot' && metric2 === 'Kilometers') {
    result.value = inputVal / 3281;
} else if (metric1 === 'Foot' && metric2 === 'Miles') {
    result.value = inputVal / 5280;
} else if (metric1 === 'Foot' && metric2 === 'Inches') {
    result.value = inputVal * 12;
} else if (metric1 === 'Foot' && metric2 === 'Yards') {
    result.value = inputVal / 3;
// yards
} else if (metric1 === 'Yards' && metric2 === 'Centimeters') {
    result.value = inputVal * 91.44;
} else if (metric1 === 'Yards' && metric2 === 'Meters') {
    result.value = inputVal / 1.094;
} else if (metric1 === 'Yards' && metric2 === 'Kilometers') {
    result.value = inputVal / 1094;
} else if (metric1 === 'Yards' && metric2 === 'Miles') {
    result.value = inputVal / 1760;
} else if (metric1 === 'Yards' && metric2 === 'Inches') {
    result.value = inputVal * 36;
} else {
    result.value = inputVal * 3;
};
};

// Weight base convert
function weightConvert() {
// tonne
if (metric1 === 'Tonne' && metric2 === 'Kilos') {
    result.value = inputVal * 1000;
} else if (metric1 === 'Tonne' && metric2 === 'Grams') {
    result.value = (inputVal * 1000) * 1000;
} else if (metric1 === 'Tonne' && metric2 === 'Milligrams') {
    result.value = (inputVal * 1000) * 1000000;
} else if (metric1 === 'Tonne' && metric2 === 'Ounce') {
    result.value = inputVal * 35274;
} else if (metric1 === 'Tonne' && metric2 === 'Pounds') {
    result.value = inputVal * 2205;
// kilos
} else if (metric1 === 'Kilos' && metric2 === 'Tonne') {
    result.value = inputVal / 1000;
} else if (metric1 === 'Kilos' && metric2 === 'Grams') {
    results.value = inputVal * 1000;
} else if (metric1 === 'Kilos' && metric2 === 'Milligrams') {
    results.value = (inputVal * 1000) * 1000;
} else if (metric1 === 'Kilos' && metric2 === 'Ounce') {
    result.value = inputVal * 35.275;
} else if (metric1 === 'Kilos' && metric2 === 'Pounds') {
    result.value = inputVal * 2.205;
// grams
} else if (metric1 === 'Grams' && metric2 === 'Tonne') {
    result.value = (inputVal / 1000) / 1000;
} else if (metric1 === 'Grams' && metric2 === 'Kilos') {
    result.value = inputVal / 1000;
} else if (metric1 === 'Grams' && metric2 === 'Milligrams') {
    result.value = inputVal * 1000;
} else if (metric1 === 'Grams' && metric2 === 'Ounce') {
    result.value = inputVal / 28.35;
} else if (metric1 === 'Grams' && metric2 === 'Pounds') {
let gramsToPounds = inputVal / 454;
// milligrams
} else if (metric1 === 'Milligrams' && metric2 === 'Tonne') {
    result.value = (inputVal / 1000) / 1000000;
} else if (metric1 === 'Milligrams' && metric2 === 'Kilos') {
    result.value = (inputVal / 1000) / 1000;
} else if (metric1 === 'Milligrams' && metric2 === 'Grams') {
    result.value = inputVal / 1000;
} else if (metric1 === 'Milligrams' && metric2 === 'Ounce') {
    result.value = inputVal / 28350;
} else if (metric1 === 'Milligrams' && metric2 === 'Pounds') {
    result.value = inputVal / 453592;
// ounce
} else if (metric1 === 'Ounce' && metric2 === 'Tonne') {
    result.value = inputVal / 35274;
} else if (metric1 === 'Ounce' && metric2 === 'Kilos') {
    result.value = inputVal / 35.274;
} else if (metric1 === 'Ounce' && metric2 === 'Grams') {
    result.value = inputVal * 28.35;
} else if (metric1 === 'Ounce' && metric2 === 'Milligrams') {
    result.value = inputVal * 28350;
} else if (metric1 === 'Ounce' && metric2 === 'Pounds') {
    result.value = inputVal / 16;
// pounds
} else if (metric1 === 'Pounds' && metric2 === 'Tonne') {
    result.value = inputVal / 2205;
} else if (metric1 === 'Pounds' && metric2 === 'Kilos') {
    result.value = inputVal / 2.205;
} else if (metric1 === 'Pounds' && metric2 === 'Grams') {
    result.value = inputVal * 454;
} else if (metric1 === 'Pounds' && metric2 === 'Milligrams') {
    result.value = inputVal * 453592;
} else {
    result.value = inputVal * 16;
};
};

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
    // Random number to the question
    let randomNumb = Math.floor(Math.random() * 100)

    // Random category to the question
    let categories = ['speed', 'temperature', 'time', 'scale', 'weight'];
    let randomCategory = categories[Math.floor(Math.random() * categories.length)];
    randomCategory;

    // Select the first metric using Math.random, filter to exclude the first metric, then Math.random again to select the scond metric.
    if (randomCategory === 'speed') {
        let randomMetric1 = speed[Math.floor(Math.random() * speed.length)];
        randomMetric1;
        let speedFilter = speed.filter(metric => {
            return metric !== randomMetric1;
        });
        let randomMetric2 = speedFilter[Math.floor(Math.random() * speedFilter.length)];
        randomMetric2;
    } else if (randomCategory === 'temperature') {
        let randomMetric1 = temperature[Math.floor(Math.random() * temperature.length)];
        randomMetric1;
        let temperatureFilter = temperature.filter(metric => {
            return metric !== randomMetric1;
        });
        let randomMetric2 = temperatureFilter[Math.floor(Math.random() * temperatureFilter.length)];
        randomMetric2;
    } else if (randomCategory === 'time') {
        let randomMetric1 = time[Math.floor(Math.random() * time.length)];
        randomMetric1;
        let timeFilter = time.filter(metric => {
            return metric !== randomMetric1;
        });
        let randomMetric2 = timeFilter[Math.floor(Math.random() * timeFilter.length)];
        randomMetric2;
    } else if (randomCategory === 'scale') {
        let randomMetric1 = scale[Math.floor(Math.random() * scale.length)];
    randomMetric1;
        let scaleFilter = scale.filter(metric => {
            return metric !== randomMetric1;
        });
        let randomMetric2 = scaleFilter[Math.floor(Math.random() * scaleFilter.length)];
        randomMetric2;
    } else {
        let randomMetric1 = weight[Math.floor(Math.random() * weight.length)];
        randomMetric1;
        let weightFilter = weight.filter(metric => {
            return metric !== randomMetric1;
        });
        let randomMetric2 = weightFilter[Math.floor(Math.random() * weightFilter.length)];
        randomMetric2;
    }

    // Question number counter
    let questionNumb = 01;
    let questionCounter = document.getElementById('question-counter');
    questionCounter.innerHTML = `Question ${questionNumb} - Category ${randomCategory}`;

    let questionDescription = document.getElementById('question-diplay');
    questionDescription.innerHTML = `${randomNumb} ${randomMetric1} corresponds to how many ${randomMetric2}?`;

    // Quesiton generator
    inputVal = randomNumb;
    metric1 = randomMetric1;
    metric2 = randomMetric2;

    if (randomCategory === 'speed') {
        speedConvert();
    } else if (randomCategory === 'temperature') {
        temperatureConvert();
    } else if (randomCategory === 'time') {
        timeConvert();
    } else if (randomCategory === 'scale') {
        scaleConvert();
    } else {
        weightConvert();
    }

    let correctAnswer = ;
    let wrongAnswer1 = correctAnswer + Math.floor(Math.random() * 1000);
    let wrongAnswer2 = correctAnswer + Math.floor(Math.random() * 1000);

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