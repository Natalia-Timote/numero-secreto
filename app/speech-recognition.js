const guessElement = document.getElementById('guess');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    guess = e.results[0][0].transcript;
    guessOnScreen(guess);
    guessValidValue(guess);
}

function guessOnScreen(guess) {
    guessElement.innerHTML = `
        <div>Você disse</div>
        <span class="box">${guess}</span>
    `;
}

// Permitir vários palpites
recognition.addEventListener('end', () => recognition.start());