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
    valueOut.value = Number(inputVal) * 1.609;
} else if (metric1 === 'KM per hour' && metric2 === 'Miles per hour') {
    valueOut.value = Number(inputVal) / 1.609;
} else {
    valueOut.value = Number(inputVal) * 1;
}
}

// Temperature base convertion
function temperatureConvert() {
if (metric1 === 'Celsius' && metric2 === 'Fahrenheit') {
    valueOut.value = (Number(inputVal) * 1.8) + 32;
} else if (metric1 === 'Celsius' && metric2 ==='Kelvin') {
    valueOut.value = Number(inputVal) + 273.15;
} else if (metric1 === 'Fahrenheit' && metric2 === 'Celsius') {
    valueOut.value = (Number(inputVal) - 32) * 0.55;
} else if (metric1 === 'Fahrenheit' && metric2 === 'Kelvin') {
    valueOut.value = (Number(inputVal) - 32) * 0.55 + 273.15;
} else if (metric1 === 'Kelvin' && metric2 === 'Celsius') {
    valueOut.value = Number(inputVal) - 273.15;
} else if (metric1 === 'Kelvin' && metric2 === 'Fahrenheit') {
    valueOut.value = (Number(inputVal) - 273.15) * 1.8 + 32;
} else {
    valueOut.value = Number(inputVal) * 1;
}
}

// Time base convert
function timeConvert() {
// seconds
if (metric1 === 'Seconds' && metric2 === 'Minutes') {
    valueOut.value = Number(inputVal) / 60;
} else if (metric1 === 'Seconds' && metric2 === 'Hours') {
    valueOut.value = Number(inputVal) / 3600;
} else if (metric1 === 'Seconds' && metric2 === 'Days') {
    valueOut.value = Number(inputVal) / 86400;
} else if (metric1 === 'Seconds' && metric2 === 'Weeks') {
    valueOut.value = Number(inputVal) / 604800;
} else if (metric1 === 'Seconds' && metric2 === 'Months') {
    valueOut.value = (Number(inputVal) / 3600) / 730;
} else if (metric1 === 'Seconds' && metric2 === 'Years') {
    valueOut.value = (Number(inputVal) / 3600) / 8760;
// minutes
} else if (metric1 === 'Minutes' && metric2 === 'Seconds') {
    valueOut.value = Number(inputVal) * 60;
} else if (metric1 === 'Minutes' && metric2 === 'Hours') {
    valueOut.value = Number(inputVal) / 60;
} else if (metric1 === 'Minutes' && metric2 === 'Days') {
    valueOut.value = Number(inputVal) / 1440;
} else if (metric1 === 'Minutes' && metric2 === 'Weeks') {
    valueOut.value = Number(inputVal) / 10080;
} else if (metric1 === 'Minutes' && metric2 === 'Months') {
    valueOut.value = (Number(inputVal) / 60) / 730;
} else if (metric1 === 'Minutes' && metric2 === 'Years') {
    valueOut.value = (Number(inputVal) / 60) / 8760;
// hours
} else if (metric1 === 'Hours' && metric2 === 'Seconds') {
    valueOut.value = Number(inputVal) * 3600;
} else if (metric1 === 'Hours' && metric2 === 'Minutes') {
    valueOut.value = Number(inputVal) * 60;
} else if (metric1 === 'Hours' && metric2 === 'Days') {
    valueOut.value = Number(inputVal) / 24;
} else if (metric1 === 'Hours' && metric2 === 'Weeks') {
    valueOut.value = Number(inputVal) / 168;
} else if (metric1 === 'Hours' && metric2 === 'Months') {
    valueOut.value = Number(inputVal) / 730;
} else if (metric1 === 'Hours' && metric2 === 'Years') {
    valueOut.value = Number(inputVal) / 8760;
// days
} else if (metric1 === 'Days' && metric2 === 'Seconds') {
    valueOut.value = Number(inputVal) * 86400;
} else if (metric1 === 'Days' && metric2 === 'Minutes') {
    valueOut.value = Number(inputVal) * 1440;
} else if (metric1 === 'Days' && metric2 === 'Hours') {
    valueOut.value = Number(inputVal) * 24;
} else if (metric1 === 'Days' && metric2 === 'Weeks') {
    valueOut.value = Number(inputVal) / 7;
} else if (metric1 === 'Days' && metric2 === 'Months') {
    valueOut.value = Number(inputVal) / 30.41;
} else if (metric1 === 'Days' && metric2 === 'Years') {
    valueOut.value = Number(inputVal) / 365;
//  weeks
} else if (metric1 === 'Weeks' && metric2 === 'Seconds') {
    valueOut.value = Number(inputVal) * 604800;
} else if (metric1 === 'Weeks' && metric2 === 'Minutes') {
    valueOut.value = Number(inputVal) * 10080;
} else if (metric1 === 'Weeks' && metric2 === 'Hours') {
    valueOut.value = Number(inputVal) * 168;
} else if (metric1 === 'Weeks' && metric2 === 'Days') {
    valueOut.value = Number(inputVal) * 7;
} else if (metric1 === 'Weeks' && metric2 === 'Months') {
    valueOut.value = Number(inputVal) / 4.345;
} else if (metric1 === 'Weeks' && metric2 === 'Years') {
    valueOut.value = Number(inputVal) / 52.143;
// months
} else if (metric1 === 'Months' && metric2 === 'Seconds') {
    valueOut.value = (Number(inputVal) * 730) * 3600;
} else if (metric1 === 'Months' && metric2 === 'Minutes') {
    valueOut.value = (Number(inputVal) * 730) * 60;
} else if (metric1 === 'Months' && metric2 === 'Hours') {
    valueOut.value = Number(inputVal) * 730;
} else if (metric1 === 'Months' && metric2 === 'Days') {
    valueOut.value = Number(inputVal) * 30.41;
} else if (metric1 === 'Months' && metric2 === 'Weeks') {
    valueOut.value = Number(inputVal) * 345;
} else if (metric1 === 'Months' && metric2 === 'Years') {
    valueOut.value = Number(inputVal) / 12;
// years
} else if (metric1 === 'Years' && metric2 === 'Seconds') {
    valueOut.value = (Number(inputVal) * 365) * 86400;
} else if (metric1 === 'Years' && metric2 === 'Minutes') {
    valueOut.value = (Number(inputVal) * 365) * 1440;
} else if (metric1 === 'Years' && metric2 === 'Hours') {
    valueOut.value = Number(inputVal) * 8760;
} else if (metric1 === 'Years' && metric2 === 'Days') {
    valueOut.value = Number(inputVal) * 365;
} else if (metric1 === 'Years' && metric2 === 'Weeks') {
    valueOut.value = Number(inputVal) * 52.143;
} else if (metric1 === 'Years' && metric2 === 'Months') {
    valueOut.value = Number(inputVal) * 12;
} else {
    valueOut.value = Number(inputVal) *1;
}
}

// Scale base convert
function scaleConvert() {
// centimeters
if (metric1 === 'Centimeters' && metric2 === 'Meters') {
    valueOut.value = Number(inputVal) / 100;
} else if (metric1 === 'Centimeters' && metric2 === 'Kilometers') {
    valueOut.value = Number(inputVal) / 100000;
} else if (metric1 === 'Centimeters' && metric2 === 'Miles') {
    valueOut.value = Number(inputVal) / 160934;
} else if (metric1 === 'Centimeters' && metric2 === 'Inches') {
    valueOut.value = Number(inputVal) / 2.54;
} else if (metric1 === 'Centimeters' && metric2 === 'Foot') {
    valueOut.value = Number(inputVal) / 30.48;
} else if (metric1 === 'Centimeters' && metric2 === 'Yards') {
    valueOut.value = Number(inputVal) / 91.44;
// meters
} else if (metric1 === 'Meters' && metric2 === 'Centimeters') {
    valueOut.value = Number(inputVal) * 100;
} else if (metric1 === 'Meters' && metric2 === 'Kilometers') {
    valueOut.value = Number(inputVal) / 1000;
} else if (metric1 === 'Meters' && metric2 === 'Miles') {
    valueOut.value = Number(inputVal) / 1609;
} else if (metric1 === 'Meters' && metric2 === 'Inches') {
    valueOut.value = Number(inputVal) * 39.37;
} else if (metric1 === 'Meters' && metric2 === 'Foot') {
    valueOut.value = Number(inputVal) * 3.281;
} else if (metric1 === 'Meters' && metric2 === 'Yards') {
    valueOut.value = Number(inputVal) * 1.094;
// kilometers
} else if (metric1 === 'Kilometers' && metric2 === 'Centimeters') {
    valueOut.value = Number(inputVal) * 100000;
} else if (metric1 === 'Kilometers' && metric2 === 'Meters') {
    valueOut.value = Number(inputVal) * 1000;
} else if (metric1 === 'Kilometers' && metric2 === 'Miles') {
    valueOut.value = Number(inputVal) / 1.609;
} else if (metric1 === 'Kilometers' && metric2 === 'Inches') {
    valueOut.value = Number(inputVal) * 39370;
} else if (metric1 === 'Kilometers' && metric2 === 'Foot') {
    valueOut.value = Number(inputVal) * 3281;
} else if (metric1 === 'Kilometers' && metric2 === 'Yards') {
    valueOut.value = Number(inputVal) * 1094;
// miles
} else if (metric1 === 'Miles' && metric2 === 'Centimeters') {
    valueOut.value = Number(inputVal) * 160934;
} else if (metric1 === 'Miles' && metric2 === 'Meters') {
    valueOut.value = Number(inputVal) * 1609;
} else if (metric1 === 'Miles' && metric2 === 'Kilometers') {
    valueOut.value = Number(inputVal) * 1.609;
} else if (metric1 === 'Miles' && metric2 === 'Inches') {
    valueOut.value = Number(inputVal) * 63360;
} else if (metric1 === 'Miles' && metric2 === 'Foot') {
    valueOut.value = Number(inputVal) * 5280;
} else if (metric1 === 'Miles' && metric2 === 'Yards') {
    valueOut.value = Number(inputVal) * 1760;
// inches
} else if (metric1 === 'Inches' && metric2 === 'Centimeters') {
    valueOut.value = Number(inputVal) * 2.54;
} else if (metric1 === 'Inches' && metric2 === 'Meters') {
    valueOut.value = Number(inputVal) / 39.37;
} else if (metric1 === 'Inches' && metric2 === 'Kilometers') {
    valueOut.value = Number(inputVal) / 39370;
} else if (metric1 === 'Inches' && metric2 === 'Miles') {
    valueOut.value = Number(inputVal) / 63360;
} else if (metric1 === 'Inches' && metric2 === 'Foot') {
    valueOut.value = Number(inputVal) / 12;
} else if (metric1 === 'Inches' && metric2 === 'Yards') {
    valueOut.value = Number(inputVal) / 36;
// foot
} else if (metric1 === 'Foot' && metric2 === 'Centimeters') {
    valueOut.value = Number(inputVal) * 30.48;
} else if (metric1 === 'Foot' && metric2 === 'Meters') {
    valueOut.value =  Number(inputVal) / 3.281;
} else if (metric1 === 'Foot' && metric2 === 'Kilometers') {
    valueOut.value = Number(inputVal) / 3281;
} else if (metric1 === 'Foot' && metric2 === 'Miles') {
    valueOut.value = Number(inputVal) / 5280;
} else if (metric1 === 'Foot' && metric2 === 'Inches') {
    valueOut.value = Number(inputVal) * 12;
} else if (metric1 === 'Foot' && metric2 === 'Yards') {
    valueOut.value = inputNumber(inputVal) / 3;
// yards
} else if (metric1 === 'Yards' && metric2 === 'Centimeters') {
    valueOut.value = Number(inputVal) * 91.44;
} else if (metric1 === 'Yards' && metric2 === 'Meters') {
    valueOut.value = Number(inputVal) / 1.094;
} else if (metric1 === 'Yards' && metric2 === 'Kilometers') {
    valueOut.value = Number(inputVal) / 1094;
} else if (metric1 === 'Yards' && metric2 === 'Miles') {
    valueOut.value = Number(inputVal) / 1760;
} else if (metric1 === 'Yards' && metric2 === 'Inches') {
    valueOut.value = Number(inputVal) * 36;
} else if (metric1 === 'Yards' && metric2 === 'Foot'){
    valueOut.value = Number(inputVal) * 3;
} else {
    valueOut.value = Number(inputVal) * 1;
    console.log('ERROR');
}
}

// Weight base convert
function weightConvert() {
// tonne
if (metric1 === 'Tonne' && metric2 === 'Kilos') {
    valueOut.value = Number(inputVal) * 1000;
} else if (metric1 === 'Tonne' && metric2 === 'Grams') {
    valueOut.value = (Number(inputVal) * 1000) * 1000;
} else if (metric1 === 'Tonne' && metric2 === 'Milligrams') {
    valueOut.value = (Number(inputVal) * 1000) * 1000000;
} else if (metric1 === 'Tonne' && metric2 === 'Ounce') {
    valueOut.value = Number(inputVal) * 35274;
} else if (metric1 === 'Tonne' && metric2 === 'Pounds') {
    valueOut.value = Number(inputVal) * 2205;
// kilos
} else if (metric1 === 'Kilos' && metric2 === 'Tonne') {
    valueOut.value = Number(inputVal) / 1000;
} else if (metric1 === 'Kilos' && metric2 === 'Grams') {
    valueOut.value = Number(inputVal) * 1000;
} else if (metric1 === 'Kilos' && metric2 === 'Milligrams') {
    valueOut.value = (Number(inputVal) * 1000) * 1000;
} else if (metric1 === 'Kilos' && metric2 === 'Ounce') {
    valueOut.value = Number(inputVal) * 35.275;
} else if (metric1 === 'Kilos' && metric2 === 'Pounds') {
    valueOut.value = Number(inputVal) * 2.205;
// grams
} else if (metric1 === 'Grams' && metric2 === 'Tonne') {
    valueOut.value = (Number(inputVal) / 1000) / 1000;
} else if (metric1 === 'Grams' && metric2 === 'Kilos') {
    valueOut.value = Number(inputVal) / 1000;
} else if (metric1 === 'Grams' && metric2 === 'Milligrams') {
    valueOut.value = Number(inputVal) * 1000;
} else if (metric1 === 'Grams' && metric2 === 'Ounce') {
    valueOut.value = Number(inputVal) / 28.35;
} else if (metric1 === 'Grams' && metric2 === 'Pounds') {
    valueOut.value = Number(inputVal) / 454;
// milligrams
} else if (metric1 === 'Milligrams' && metric2 === 'Tonne') {
    valueOut.value = (Number(inputVal) / 1000) / 1000000;
} else if (metric1 === 'Milligrams' && metric2 === 'Kilos') {
    valueOut.value = (Number(inputVal) / 1000) / 1000;
} else if (metric1 === 'Milligrams' && metric2 === 'Grams') {
    valueOut.value = Number(inputVal) / 1000;
} else if (metric1 === 'Milligrams' && metric2 === 'Ounce') {
    valueOut.value = Number(inputVal) / 28350;
} else if (metric1 === 'Milligrams' && metric2 === 'Pounds') {
    valueOut.value = Number(inputVal) / 453592;
// ounce
} else if (metric1 === 'Ounce' && metric2 === 'Tonne') {
    valueOut.value = Number(inputVal) / 35274;
} else if (metric1 === 'Ounce' && metric2 === 'Kilos') {
    valueOut.value = Number(inputVal) / 35.274;
} else if (metric1 === 'Ounce' && metric2 === 'Grams') {
    valueOut.value = Number(inputVal) * 28.35;
} else if (metric1 === 'Ounce' && metric2 === 'Milligrams') {
    valueOut.value = Number(inputVal) * 28350;
} else if (metric1 === 'Ounce' && metric2 === 'Pounds') {
    valueOut.value = Number(inputVal) / 16;
// pounds
} else if (metric1 === 'Pounds' && metric2 === 'Tonne') {
    valueOut.value = Number(inputVal) / 2205;
} else if (metric1 === 'Pounds' && metric2 === 'Kilos') {
    valueOut.value = Number(inputVal) / 2.205;
} else if (metric1 === 'Pounds' && metric2 === 'Grams') {
    valueOut.value = Number(inputVal * 454);
} else if (metric1 === 'Pounds' && metric2 === 'Milligrams') {
    valueOut.value = Number(inputVal * 453592);
} else if (metric1 === 'Pounds' && metric2 === 'Ounce') {
    valueOut.value = Number(inputVal * 16);
} else {
    valueOut.value = Number(inputVal * 1);
    console.log("ERROR")
}
}

// converter.html functions

// Global variables to converter.html page
let valueIn = document.getElementById('value-base');
let valueOut = document.getElementById('value-result');
let convertCategory = document.getElementById('categories');
let convertMetric1 = document.getElementById('metric-one');
let convertMetric2 = document.getElementById('metric-two');
let convertMetricValue1, convertMetricValue2, convertCategoryValue;

convertMetricValue1 = convertMetric1.value;
convertMetricValue2 = convertMetric2.value;
convertCategoryValue = convertCategory.value;

/**
 * Change the options following the category selector. 
 */
const categories_list = {
    speed:['Miles per hour', 'KM per hour'],
    temperature:['Celsius', 'Fahrenheit', 'Kelvin'],
    time:['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months', 'Years'],
    scale:['Centimeters', 'Meters', 'Kilometers', 'Miles', 'Inches', 'Foot', 'Yards'],
    weight:['Tonne', 'Kilos', 'Grams', 'Milligrams', 'Ounce', 'Pounds'],

};

convertCategory.addEventListener('change', function(){
    console.log('here')
    let selected_option = categories_list[this.value];

    while(convertMetric1.options.length > 0) {
        convertMetric1.options.remove(0);
    }

    Array.from(selected_option).forEach(function(el){

        let option = new Option(el, el);

        convertMetric1.appendChild(option);
    });

});
convertCategory.addEventListener('change', function(){

    let selected_option = categories_list[this.value];

    while(convertMetric2.options.length > 0) {
        convertMetric2.options.remove(0);
    }

    Array.from(selected_option).forEach(function(el){

        let option = new Option(el, el);

        convertMetric2.appendChild(option);
    });

});

/**
 * Receives the value of metric 1 and returns the conversion for metric 2.
 */
function convertFunction() {
    inputVal = valueIn.value;
    convertCategoryValue = convertCategory.value;
    convertMetricValue1 = convertMetric1.value;
    convertMetricValue2 = convertMetric2.value;
    metric1 = convertMetricValue1;
    metric2 = convertMetricValue2;

    // Checks which category was selected and determines which function to call
    if (convertCategoryValue === 'speed') {
        speedConvert(inputVal);
    } else if (convertCategoryValue === 'temperature') {
        temperatureConvert(inputVal);
    } else if (convertCategoryValue === 'time') {
        timeConvert(inputVal);
    } else if (convertCategoryValue === 'scale') {
        scaleConvert(inputVal);
    } else if (convertCategoryValue === 'weight') {
        weightConvert(inputVal);
    } else {
        alert("ERROR");
    };



}

valueIn.addEventListener("keyup", convertFunction);
convertMetric1.addEventListener("change", convertFunction);
convertMetric2.addEventListener("change", convertFunction);

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

document.getElementById('swap').addEventListener('click', swapMetrics);

/**
 * Clear all the values.
 */
function clearMetrics() {

    valueIn.value = "";
    valueOut.value = "";

    console.log("INPUT: " + inputVal);
    console.log("RESULT: " + result.value);
    console.log("METRIC1: " + metric1);
    console.log("METRIC2: " + metric2);
    console.log("CATEGORY: " + convertCategoryValue);
}

document.getElementById('clear').addEventListener('click', clearMetrics);