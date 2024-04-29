function guessValidValue(guess) {
    const number = +guess; //Tornando o número inteiro

    if(invalidGuess(number)) {
        guessElement.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if(numberNotAllowed(number)) {
        guessElement.innerHTML += `<div>Valor inválido: fale um número entre ${minValue} e ${maxValue}!</div>`;
        return;
    }

    if(number === secretNumber) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3>O Número Secreto era ${number}</h3>
        `;
    } else if(number > secretNumber) {
        guessElement.innerHTML += `<div>O Número Secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></div>`
    }   else {
        guessElement.innerHTML += `<div>O Número Secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></div>`
    }
}

function invalidGuess(number) {
    return Number.isNaN(number);
}

function numberNotAllowed(number) {
    return number > maxValue || number < minValue;
}
