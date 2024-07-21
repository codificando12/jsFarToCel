function convertToFarenheit () {
    const tempValue = temperatureInput.value;
    const convertCelForm = 5 /9 * (tempValue - 32);
    result.textContent = convertCelForm;
    
}

function convertToCelcius () {
    const tempValue = temperatureInput.value;
    const convertFarForm = (tempValue * (9 / 5)) + 32;
    result.textContent = convertFarForm;
}

const tempFarenheit = [32, 68, 104, 212];

const convertor = tempFarenheit.map( tempCelcius => 5 / 9 * (tempCelcius - 32));

console.log(convertor)

const container = document.querySelector(".container");
const temperatureInput = document.querySelector(".temperature");
console.log(temperatureInput)
const farenheitButton = document.querySelector(".farenheit");
const celciusButton = document.querySelector(".celcius");
const result = document.querySelector(".result");


farenheitButton.addEventListener("click", convertToFarenheit)
celciusButton.addEventListener("click", convertToCelcius)