// Global variables
let inputVal = 0;
let result = 0;
let metric1 = "";
let metric2 = "";

let categories = ['speed', 'temperature', 'time', 'scale', 'weight'];

let speed = ['Miles per hour', 'KM per hour'];
let temperature = ['Celsius', 'Fahrenheit', 'Kelvin'];
let time = ['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months', 'Years'];
let scale = ['Centimetres', 'Meters', 'Kilometers', 'Miles', 'Inches', 'Foot', 'Yards'];
let weight = ['Tonne', 'Kilos', 'Grams', 'Milligrams', 'Ounce', 'Pounds'];

// Metrics functions for each category, using if/else to verify the metrics.

// Speed base convertion
function speedConvert() {
if (metric1 === 'Miles per hour' && metric2 === 'KM per hour') {
    result = inputVal * 1.609;
} else if (metric1 === 'KM per hour' && metric2 === 'Miles per hour') {
    result = inputVal / 1.609;
} else {
    result = inputVal * 1;
}
}

// Temperature base convertion
function temperatureConvert() {
if (metric1 === 'Celsius' && metric2 === 'Fahrenheit') {
    result = (inputVal * 1.8) + 32;
} else if (metric1 === 'Celsius' && metric2 ==='Kelvin') {
    result = inputVal + 273.15;
} else if (metric1 === 'Fahrenheit' && metric2 === 'Celsius') {
    result = (inputVal - 32) * 0.55;
} else if (metric1 === 'Fahrenheit' && metric2 === 'Kelvin') {
    result = (inputVal - 32) * 0.55 + 273.15;
} else if (metric1 === 'Kelvin' && metric2 === 'Celsius') {
    result = inputVal - 273.15;
} else if (metric1 === 'Kelvin' && metric2 === 'Fahrenheit') {
    result = (inputVal - 273.15) * 1.8 + 32;
} else {
    result = inputVal * 1;
}
}

// Time base convert
function timeConvert() {
// seconds
if (metric1 === 'Seconds' && metric2 === 'Minutes') {
    result = inputVal / 60;
} else if (metric1 === 'Seconds' && metric2 === 'Hours') {
    result = inputVal / 3600;
} else if (metric1 === 'Seconds' && metric2 === 'Days') {
    result = inputVal / 86400;
} else if (metric1 === 'Seconds' && metric2 === 'Weeks') {
    result = inputVal / 604800;
} else if (metric1 === 'Seconds' && metric2 === 'Months') {
    result = (inputVal / 3600) / 730;
} else if (metric1 === 'Seconds' && metric2 === 'Years') {
    result = (inputVal / 3600) / 8760;
// minutes
} else if (metric1 === 'Minutes' && metric2 === 'Seconds') {
    result = inputVal * 60;
} else if (metric1 === 'Minutes' && metric2 === 'Hours') {
    result = inputVal / 60;
} else if (metric1 === 'Minutes' && metric2 === 'Days') {
    result = inputVal / 1440;
} else if (metric1 === 'Minutes' && metric2 === 'Weeks') {
    result = inputVal / 10080;
} else if (metric1 === 'Minutes' && metric2 === 'Months') {
    result = (inputVal / 60) / 730;
} else if (metric1 === 'Minutes' && metric2 === 'Years') {
    result = (inputVal / 60) / 8760;
// hours
} else if (metric1 === 'Hours' && metric2 === 'Seconds') {
    result = inputVal * 3600;
} else if (metric1 === 'Hours' && metric2 === 'Minutes') {
    result = inputVal * 60;
} else if (metric1 === 'Hours' && metric2 === 'Days') {
    result = inputVal / 24;
} else if (metric1 === 'Hours' && metric2 === 'Weeks') {
    result = inputVal / 168;
} else if (metric1 === 'Hours' && metric2 === 'Months') {
    result = inputVal / 730;
} else if (metric1 === 'Hours' && metric2 === 'Years') {
    result = inputVal / 8760;
// days
} else if (metric1 === 'Days' && metric2 === 'Seconds') {
    result = inputVal * 86400;
} else if (metric1 === 'Days' && metric2 === 'Minutes') {
    result = inputVal * 1440;
} else if (metric1 === 'Days' && metric2 === 'Hours') {
    result = inputVal * 24;
} else if (metric1 === 'Days' && metric2 === 'Weeks') {
    result = inputVal / 7;
} else if (metric1 === 'Days' && metric2 === 'Months') {
    result = inputVal / 30.41;
} else if (metric1 === 'Days' && metric2 === 'Years') {
    result = inputVal / 365;
//  weeks
} else if (metric1 === 'Weeks' && metric2 === 'Seconds') {
    result = inputVal * 604800;
} else if (metric1 === 'Weeks' && metric2 === 'Minutes') {
    result = inputVal * 10080;
} else if (metric1 === 'Weeks' && metric2 === 'Hours') {
    result = inputVal * 168;
} else if (metric1 === 'Weeks' && metric2 === 'Days') {
    result = inputVal * 7;
} else if (metric1 === 'Weeks' && metric2 === 'Months') {
    result = inputVal / 4.345;
} else if (metric1 === 'Weeks' && metric2 === 'Years') {
    result = inputVal / 52.143;
// months
} else if (metric1 === 'Months' && metric2 === 'Seconds') {
    result = (inputVal * 730) * 3600;
} else if (metric1 === 'Months' && metric2 === 'Minutes') {
    result = (inputVal * 730) * 60;
} else if (metric1 === 'Months' && metric2 === 'Hours') {
    result = inputVal * 730;
} else if (metric1 === 'Months' && metric2 === 'Days') {
    result = inputVal * 30.41;
} else if (metric1 === 'Months' && metric2 === 'Weeks') {
    result = inputVal * 345;
} else if (metric1 === 'Months' && metric2 === 'Years') {
    result = inputVal / 12;
// years
} else if (metric1 === 'Years' && metric2 === 'Seconds') {
    result = (inputVal * 365) * 86400;
} else if (metric1 === 'Years' && metric2 === 'Minutes') {
    result = (inputVal * 365) * 1440;
} else if (metric1 === 'Years' && metric2 === 'Hours') {
    result = inputVal * 8760;
} else if (metric1 === 'Years' && metric2 === 'Days') {
    result = inputVal * 365;
} else if (metric1 === 'Years' && metric2 === 'Weeks') {
    result = inputVal * 52.143;
} else if (metric1 === 'Years' && metric2 === 'Months') {
    result = inputVal * 12;
} else {
    result = inputVal *1;
}
}

// Scale base convert
function scaleConvert() {
// centimeters
if (metric1 === 'Centimeters' && metric2 === 'Meters') {
    result = inputVal / 100;
} else if (metric1 === 'Centimeters' && metric2 === 'Kilometers') {
    result = inputVal / 100000;
} else if (metric1 === 'Centimeters' && metric2 === 'Miles') {
    result = inputVal / 160934;
} else if (metric1 === 'Centimeters' && metric2 === 'Inches') {
    result = inputVal / 2.54;
} else if (metric1 === 'Centimeters' && metric2 === 'Foot') {
    result = inputVal / 30.48;
} else if (metric1 === 'Centimeters' && metric2 === 'Yards') {
    result = inputVal / 91.44;
// meters
} else if (metric1 === 'Meters' && metric2 === 'Centimeters') {
    result = inputVal * 100;
} else if (metric1 === 'Meters' && metric2 === 'Kilometers') {
    result = inputVal / 1000;
} else if (metric1 === 'Meters' && metric2 === 'Miles') {
    result = inputVal / 1609;
} else if (metric1 === 'Meters' && metric2 === 'Inches') {
    result = inputVal * 39.37;
} else if (metric1 === 'Meters' && metric2 === 'Foot') {
    result = inputVal * 3.281;
} else if (metric1 === 'Meters' && metric2 === 'Yards') {
    result = inputVal * 1.094;
// kilometers
} else if (metric1 === 'Kilometers' && metric2 === 'Centimeters') {
    result = inputVal * 100000;
} else if (metric1 === 'Kilometers' && metric2 === 'Meters') {
    result = inputVal * 1000;
} else if (metric1 === 'Kilometers' && metric2 === 'Miles') {
    result = inputVal / 1.609;
} else if (metric1 === 'Kilometers' && metric2 === 'Inches') {
    result = inputVal * 39370;
} else if (metric1 === 'Kilometers' && metric2 === 'Foot') {
    result = inputVal * 3281;
} else if (metric1 === 'Kilometers' && metric2 === 'Yards') {
    result = inputVal * 1094;
// miles
} else if (metric1 === 'Miles' && metric2 === 'Centimeters') {
    result = inputVal * 160934;
} else if (metric1 === 'Miles' && metric2 === 'Meters') {
    result = inputVal * 1609;
} else if (metric1 === 'Miles' && metric2 === 'Kilometers') {
    result = inputVal * 1.609;
} else if (metric1 === 'Miles' && metric2 === 'Inches') {
    result = inputVal * 63360;
} else if (metric1 === 'Miles' && metric2 === 'Foot') {
    result = inputVal * 5280;
} else if (metric1 === 'Miles' && metric2 === 'Yards') {
    result = inputVal * 1760;
// inches
} else if (metric1 === 'Inches' && metric2 === 'Centimeters') {
    result = inputVal * 2.54;
} else if (metric1 === 'Inches' && metric2 === 'Meters') {
    result = inputVal / 39.37;
} else if (metric1 === 'Inches' && metric2 === 'Kilometers') {
    result = inputVal / 39370;
} else if (metric1 === 'Inches' && metric2 === 'Miles') {
    result = inputVal / 63360;
} else if (metric1 === 'Inches' && metric2 === 'Foot') {
    result = inputVal / 12;
} else if (metric1 === 'Inches' && metric2 === 'Yards') {
    result = inputVal / 36;
// foot
} else if (metric1 === 'Foot' && metric2 === 'Centimeters') {
    result = inputVal * 30.48;
} else if (metric1 === 'Foot' && metric2 === 'Meters') {
    result =  inputVal / 3.281;
} else if (metric1 === 'Foot' && metric2 === 'Kilometers') {
    result = inputVal / 3281;
} else if (metric1 === 'Foot' && metric2 === 'Miles') {
    result = inputVal / 5280;
} else if (metric1 === 'Foot' && metric2 === 'Inches') {
    result = inputVal * 12;
} else if (metric1 === 'Foot' && metric2 === 'Yards') {
    result = inputVal / 3;
// yards
} else if (metric1 === 'Yards' && metric2 === 'Centimeters') {
    result = inputVal * 91.44;
} else if (metric1 === 'Yards' && metric2 === 'Meters') {
    result = inputVal / 1.094;
} else if (metric1 === 'Yards' && metric2 === 'Kilometers') {
    result = inputVal / 1094;
} else if (metric1 === 'Yards' && metric2 === 'Miles') {
    result = inputVal / 1760;
} else if (metric1 === 'Yards' && metric2 === 'Inches') {
    result = inputVal * 36;
} else if (metric1 === 'Yards' && metric2 === 'Foot'){
    result = inputVal * 3;
} else {
    result = inputVal * 1;
}
}

// Weight base convert
function weightConvert() {
// tonne
if (metric1 === 'Tonne' && metric2 === 'Kilos') {
    result = inputVal * 1000;
} else if (metric1 === 'Tonne' && metric2 === 'Grams') {
    result = (inputVal * 1000) * 1000;
} else if (metric1 === 'Tonne' && metric2 === 'Milligrams') {
    result = (inputVal * 1000) * 1000000;
} else if (metric1 === 'Tonne' && metric2 === 'Ounce') {
    result = inputVal * 35274;
} else if (metric1 === 'Tonne' && metric2 === 'Pounds') {
    result = inputVal * 2205;
// kilos
} else if (metric1 === 'Kilos' && metric2 === 'Tonne') {
    result = inputVal / 1000;
} else if (metric1 === 'Kilos' && metric2 === 'Grams') {
    results = inputVal * 1000;
} else if (metric1 === 'Kilos' && metric2 === 'Milligrams') {
    results = (inputVal * 1000) * 1000;
} else if (metric1 === 'Kilos' && metric2 === 'Ounce') {
    result = inputVal * 35.275;
} else if (metric1 === 'Kilos' && metric2 === 'Pounds') {
    result = inputVal * 2.205;
// grams
} else if (metric1 === 'Grams' && metric2 === 'Tonne') {
    result = (inputVal / 1000) / 1000;
} else if (metric1 === 'Grams' && metric2 === 'Kilos') {
    result = inputVal / 1000;
} else if (metric1 === 'Grams' && metric2 === 'Milligrams') {
    result = inputVal * 1000;
} else if (metric1 === 'Grams' && metric2 === 'Ounce') {
    result = inputVal / 28.35;
} else if (metric1 === 'Grams' && metric2 === 'Pounds') {
let gramsToPounds = inputVal / 454;
// milligrams
} else if (metric1 === 'Milligrams' && metric2 === 'Tonne') {
    result = (inputVal / 1000) / 1000000;
} else if (metric1 === 'Milligrams' && metric2 === 'Kilos') {
    result = (inputVal / 1000) / 1000;
} else if (metric1 === 'Milligrams' && metric2 === 'Grams') {
    result = inputVal / 1000;
} else if (metric1 === 'Milligrams' && metric2 === 'Ounce') {
    result = inputVal / 28350;
} else if (metric1 === 'Milligrams' && metric2 === 'Pounds') {
    result = inputVal / 453592;
// ounce
} else if (metric1 === 'Ounce' && metric2 === 'Tonne') {
    result = inputVal / 35274;
} else if (metric1 === 'Ounce' && metric2 === 'Kilos') {
    result = inputVal / 35.274;
} else if (metric1 === 'Ounce' && metric2 === 'Grams') {
    result = inputVal * 28.35;
} else if (metric1 === 'Ounce' && metric2 === 'Milligrams') {
    result = inputVal * 28350;
} else if (metric1 === 'Ounce' && metric2 === 'Pounds') {
    result = inputVal / 16;
// pounds
} else if (metric1 === 'Pounds' && metric2 === 'Tonne') {
    result = inputVal / 2205;
} else if (metric1 === 'Pounds' && metric2 === 'Kilos') {
    result = inputVal / 2.205;
} else if (metric1 === 'Pounds' && metric2 === 'Grams') {
    result = inputVal * 454;
} else if (metric1 === 'Pounds' && metric2 === 'Milligrams') {
    result = inputVal * 453592;
} else if (metric1 === 'Pounds' && metric2 === 'Ounce') {
    result = inputVal * 16;
} else {
    result = inputVal * 1;
}
}

// converter.html functions

// Global variables to converter.html page

let valueIn = document.getElementById('value-base');
let valueOut = document.getElementById('value-result');
let convertCategory = document.getElementById('categories');
let convertMetric1 = document.getElementById('metric-one');
let convertMetric2 = document.getElementById('metric-two');

/**
 * Change the options following the category selector. 
 */
 function convertCategoryMetrics() {

    let categories = {
    speed:['Miles per hour', 'KM per hour'],
    temperature:['Celsius', 'Fahrenheit', 'Kelvin'],
    time:['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months', 'Years'],
    scale:['Centimetres', 'Meters', 'Kilometers', 'Miles', 'Inches', 'Foot', 'Yards'],
    weight:['Tonne', 'Kilos', 'Grams', 'Milligrams', 'Ounce', 'Pounds'],
    };

let c1 = document.getElementById('categories');
let m1 = document.getElementById('metric-one');
let m2 = document.getElementById('metric-two');

c1.addEventListener('change', function(){

    let selected_option = categories[this.value];

    while(m1.options.length > 0) {
        m1.options.remove(0);
    }

    Array.from(selected_option).forEach(function(el){

        let option = new Option(el, el);

        m1.appendChild(option);
    });

});
c1.addEventListener('change', function(){

    let selected_option = categories[this.value];

    while(m2.options.length > 0) {
        m2.options.remove(0);
    }

    Array.from(selected_option).forEach(function(el){

        let option = new Option(el, el);

        m2.appendChild(option);
    });

});

}

/**
 * Receives the value of metric 1 and returns the conversion for metric 2.
 */
function convertMetrics(event) {

inputVal = valueIn;
metric1 = convertMetric1;
metric2 = convertMetric2;

// Checks which category was selected and determines which function to call
if (convertCategory === 'Speed') {
    speedConvert(inputVal);
} else if (convertCategory === 'Temperature') {
    temperatureConvert(inputVal);
} else if (convertCategory === 'Time') {
    timeConvert(inputVal);
} else if (convertCategory === 'Scale') {
    scaleConvert(inputVal);
} else {
    weightConvert(inputVal);
};

valueIn.addEventListener('keyup', function() {
    valueOut.innerHTML = `${result}`;
});
}

/**
 * Exchanges metric 1 for metric 2.
 */
function swapMetrics() {
// hold variables get the value from input and metric selected, and chenge the positions.
let holdValue1 = valueIn.value;
let holdValue2 = valueOut.value;
let holdMetric1 = convertMetric1.value;
let holdMetric2 = convertMetric2.value;

valueIn.value = holdValue2;
valueOut.value = holdValue1;

convertMetric1.value = holdMetric2;
convertMetric2.value = holdMetric1;

}

/**
 * Clear all the values.
 */
function clearMetrics() {

valueIn.value = "";
valueOut.value = "";

}

// quiz-game.html functions

// Quiz-game global variables.
let correctDisplay = document.getElementById('correct-score');
let incorrectDisplay = document.getElementById('incorrect-score');
let correctScore = 0;
let incorrectScore = 0;
let questionNumb = 0;

// Timer function
function timerStart() {
let timerSeconds = 30;
let timerCountdown = document.getElementById('timer');
timerCountdown.innerHTML = `<p>Timer: ${timerSeconds}</p>`;

let timerDecres = setInterval (()=>{
    timerSeconds--;
    timerCountdown.innerHTML = `<p>Timer: ${timerSeconds}</p>`;
    if (timerSeconds <= 0 || timerSeconds < 0) {
        clearInterval(timerDecres);
        incorrectScore += 1;
        newQuestion();
        timerStart();
    }
}, 1000);

}

// Create the new question and the answers
function newQuestion() {

    // Check the rules - 8 wrong answer and 15 question total.
    if (incorrectScore >= 8) {
        alert("Ops, you lose! You scored 8 incorrect answers. Try again!")
        // stopReport();
    } else if (questionNumb >= 15) {
        alert("End game! Check your results!")
        // stopReport();
    } else {
        console.log("Question Nº" + (questionNumb + 1))
    }

    // Random number to the question, 1 to 101.
    let randomNumb = Math.floor(Math.random() * 100 + 1)
    randomNumb;

    // Random category to the question
    let randomCategory = categories[Math.floor(Math.random() * categories.length)];
    randomCategory;

    // Select the first metric using Math.random, filter to exclude the first metric, then Math.random again to select the scond metric. Generate two random metrics to use in the question.
    let randomMetric1 = "";
    let randomMetric2 = "";

    if (randomCategory === 'speed') {
        randomMetric1 = speed[Math.floor(Math.random() * speed.length)];
        let speedFilter = speed.filter(metric => {
            return metric !== randomMetric1;
        });
        randomMetric2 = speedFilter[Math.floor(Math.random() * speedFilter.length)];
    } else if (randomCategory === 'temperature') {
        randomMetric1 = temperature[Math.floor(Math.random() * temperature.length)];
        let temperatureFilter = temperature.filter(metric => {
            return metric !== randomMetric1;
        });
        randomMetric2 = temperatureFilter[Math.floor(Math.random() * temperatureFilter.length)];
    } else if (randomCategory === 'time') {
        randomMetric1 = time[Math.floor(Math.random() * time.length)];
        let timeFilter = time.filter(metric => {
            return metric !== randomMetric1;
        });
        randomMetric2 = timeFilter[Math.floor(Math.random() * timeFilter.length)];
    } else if (randomCategory === 'scale') {
        randomMetric1 = scale[Math.floor(Math.random() * scale.length)];
        let scaleFilter = scale.filter(metric => {
            return metric !== randomMetric1;
        });
        randomMetric2 = scaleFilter[Math.floor(Math.random() * scaleFilter.length)];
    } else {
        randomMetric1 = weight[Math.floor(Math.random() * weight.length)];
        let weightFilter = weight.filter(metric => {
            return metric !== randomMetric1;
        });
        randomMetric2 = weightFilter[Math.floor(Math.random() * weightFilter.length)];
    }

    // Question number counter
    questionNumb += 1;
    let questionCounter = document.getElementById('question-counter');
    questionCounter.innerHTML = `Question ${questionNumb} of 15 | Category ${randomCategory}`;

    // Question display
    let questionDescription = document.getElementById('question-diplay');
    questionDescription.innerHTML = `${randomNumb} ${randomMetric1} corresponds to how many ${randomMetric2}?`;

    // Score counter update
    correctDisplay.innerHTML = `<p>Correct Answers: ${correctScore}</p>`
    incorrectDisplay.innerHTML = `<p>Incorrect Answers: ${incorrectScore}</p>`

    // Quesiton generator
    inputVal = randomNumb;
    metric1 = randomMetric1;
    metric2 = randomMetric2;

    let randomAnswer1 = 0;
    let randomAnswer2 = 0; 

    // Get the randomCategory valy to select the correct function, run function to calculate the correct result, generate random answers for each category.
    if (randomCategory === 'speed') {
        speedConvert(inputVal);
        randomAnswer1 = Math.floor(Math.random() * 15);
        randomAnswer2 = Math.floor(Math.random() * 13);
    } else if (randomCategory === 'temperature') {
        temperatureConvert(inputVal);
        randomAnswer1 = Math.floor(Math.random() * 10);
        randomAnswer2 = Math.floor(Math.random() * 10);
    } else if (randomCategory === 'time') {
        timeConvert(inputVal);
        randomAnswer1 = Math.floor(Math.random() * 10);
        randomAnswer2 = Math.floor(Math.random() * 10);
    } else if (randomCategory === 'scale') {
        scaleConvert(inputVal);
        randomAnswer1 = Math.floor(Math.random() * 10);
        randomAnswer2 = Math.floor(Math.random() * 10);
    } else {
        weightConvert(inputVal);
        randomAnswer1 = Math.floor(Math.random() * 10);
        randomAnswer2 = Math.floor(Math.random() * 10);
    } 

    let correctAnswer = result;
    let wrongAnswer1 = correctAnswer + randomAnswer1;
    let wrongAnswer2 = correctAnswer + randomAnswer2;

    // To avoid the same answers
    if (correctAnswer === wrongAnswer1) {
        wrongAnswer1 = wrongAnswer1 + 1;
    } else if (correctAnswer === wrongAnswer2) {
        wrongAnswer2 = wrongAnswer2 - 1;
    } else if (wrongAnswer1 === wrongAnswer2) {
        wrongAnswer1 = correctAnswer - 1;
    };

    // To limit the number of decimal
    if (parseFloat(correctAnswer)) {
        correctAnswer = correctAnswer.toFixed(5);
        wrongAnswer1 = wrongAnswer1.toFixed(5);
        wrongAnswer2 = wrongAnswer2.toFixed(5);
      } else {
        correctAnswer = correctAnswer.toFixed(0);
        wrongAnswer1 = wrongAnswer1.toFixed(0);
        wrongAnswer2 = wrongAnswer2.toFixed(0);
      }

    // To randomly choose the answer option
    let randomQuestion = [correctAnswer, wrongAnswer1, wrongAnswer2];
    let randomA = randomQuestion[Math.floor(Math.random() * randomQuestion.length)];
    randomA;
    let randomFilter = randomQuestion.filter(answer => {
        return answer !== randomA;
    });
    let randomB = randomFilter[Math.floor(Math.random() * randomFilter.length)];
    randomB;
    let randomFilter2 = randomFilter.filter(answer => {
        return answer !== randomB;
    });
    let randomC = randomFilter2;
    randomC;

    let questionA = document.getElementById('show-answer-a');
    let questionB = document.getElementById('show-answer-b');
    let questionC = document.getElementById('show-answer-c');

    questionA.innerHTML = `${randomA}`;
    questionB.innerHTML = `${randomB}`;
    questionC.innerHTML = `${randomC}`;

    console.log(result);

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
    correctScore = 0;
    incorrectScore = 0;
    let correctReset = document.getElementById('correct-score').innerHTML = `<p>Correct Answers: ${correctScore}</p>`;
    let incorrectReset = document.getElementById('incorrect-score').innerHTML = `<p>Incorrect Answers: ${incorrectScore}</p>`;

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
// get the divs of answers options
 let answeredA = document.getElementById('answer-a');
 let answeredB = document.getElementById('answer-b');
 let answeredC = document.getElementById('answer-c');

 let valueA = document.getElementById('show-answer-a');
 let valueB = document.getElementById('show-answer-b');
 let valueC = document.getElementById('show-answer-c');

answeredA.onclick = () => {

    if (valueA.value = result) {
        correctScore += 1;
        newQuestion();
        timerStart();
    } else {
        incorrectScore += 1;
        newQuestion();
        timerStart();
    }

    console.log("A = " + valueA.value)

}

answeredB.onclick = () => {

    if (valueB.value = result) {
        correctScore += 1;
        newQuestion();
        timerStart();
    } else {
        incorrectScore += 1;
        newQuestion();
        timerStart();
    }

    console.log("B = " + valueB.value)
}

answeredC.onclick = () => {

    if (valueC.value = result) {
        correctScore += 1;
        newQuestion();
        timerStart();
    } else {
        incorrectScore += 1;
        newQuestion();
        timerStart();
    }
    
    console.log("C = " + valueC.value)
}