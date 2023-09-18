const form = document.getElementById("form");
const email = document.getElementById("e-mail");
const emailField = document.getElementById('email-message');
const message = document.getElementById('message');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = checkInputEmail(email.value);
    checkInputMessage(emailValue);
});

function checkInputEmail(emailValue) {
    if (emailValue === '') {
        emailField.innerHTML = 'Por favor, digite seu e-mail!';
        return false;
    } else if (emailValue.includes('@')) {
        return true;
    } else {
        emailField.innerHTML = 'Digite um formato de e-mail correto!';
        return false;
    }
}

function checkInputMessage(emailValue) {
    const messageValue = message.value;

    if (messageValue === '' || emailValue === false) {
        errorMessage.innerHTML = 'Por favor, digite a mensagem!';
    } else {
        location.href = 'https://formspree.io/thanks?language=pt';
    }
}