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
let convertCategory = document.getElementById('categories').value;
let convertMetric1 = document.getElementById('metric-one');
let convertMetric2 = document.getElementById('metric-two');

/**
 * Change the options following the category selector. 
 */
const categories_list = {
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
    console.log('here')
    let selected_option = categories_list[this.value];

    while(m1.options.length > 0) {
        m1.options.remove(0);
    }

    Array.from(selected_option).forEach(function(el){

        let option = new Option(el, el);

        m1.appendChild(option);
    });

});
c1.addEventListener('change', function(){

    let selected_option = categories_list[this.value];

    while(m2.options.length > 0) {
        m2.options.remove(0);
    }

    Array.from(selected_option).forEach(function(el){

        let option = new Option(el, el);

        m2.appendChild(option);
    });

});

/**
 * Receives the value of metric 1 and returns the conversion for metric 2.
 */
function convertFunction() {
    inputVal = valueIn.value;
    convertCategory;
    metric1 = convertMetric1.value;
    metric2 = convertMetric2.value;

    // Checks which category was selected and determines which function to call
    if (convertCategory === 'speed') {
        speedConvert(inputVal);
    } else if (convertCategory === 'temperature') {
        temperatureConvert(inputVal);
    } else if (convertCategory === 'time') {
        timeConvert(inputVal);
    } else if (convertCategory === 'scale') {
        scaleConvert(inputVal);
    } else if (convertCategory === 'weight') {
        weightConvert(inputVal);
    };

    valueOut.value = result;

    console.log(result);
    console.log(metric1);
    console.log(metric2);
    console.log(convertCategory);
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

}

document.getElementById('clear').addEventListener('click', clearMetrics);