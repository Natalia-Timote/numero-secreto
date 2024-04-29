const minValue = 1;
const maxValue = 1000;

const secretNumber = newSecretNumber();

function newSecretNumber() {
    return parseInt(Math.random() * maxValue + 1);
}

const elementMinValue = document.getElementById(min-value);
elementMinValue.innerHTML = minValue;

const elementMaxValue = document.getElementById(max-value);
elementMaxValue.innerHTML = maxValue;