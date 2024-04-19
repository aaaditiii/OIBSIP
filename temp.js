const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

function computeTemp() {
    const celciusValue = parseFloat(celciusEl.value);
    const fahrenheitValue = parseFloat(fahrenheitEl.value);
    const kelvinValue = parseFloat(kelvinEl.value);

    if (!isNaN(celciusValue)) {
        fahrenheitEl.value = (celciusValue * 9 / 5) + 32;
        kelvinEl.value = celciusValue + 273.15;
    } else if (!isNaN(fahrenheitValue)) {
        celciusEl.value = (fahrenheitValue - 32) * 5 / 9;
        kelvinEl.value = (fahrenheitValue - 32) * 5 / 9 + 273.15;
    } else if (!isNaN(kelvinValue)) {
        celciusEl.value = kelvinValue - 273.15;
        fahrenheitEl.value = (kelvinValue - 273.15) * 9 / 5 + 32;
    }
}

const convertButton = document.getElementById("convert-btn");
convertButton.addEventListener("click", computeTemp);
