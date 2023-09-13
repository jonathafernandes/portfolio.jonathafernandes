const form = document.getElementById("form");
const email = document.getElementById("e-mail");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
	event.preventDefault();

})

function checkInputEmail(){
	const emailValue = email.value;

	if(emailValue = ""){

	}
}

function errorImput(input, message){
	const fomrItem = input.parenteElement;
	const textMessage = fomrItem.querySelector("a");

	textMessage.innerText = message;

	fomrItem.className = "";
}