let elem = document.querySelector('#elem');
let firstNum = document.querySelector('#first');
let secondNum = document.querySelector('#second');
let par = document.querySelector('p');


elem.addEventListener('click', function(event) {
	console.log(this.textContent);
	event.preventDefault();
	console.log(firstNum.value);
	console.log(secondNum.value);
	par.textContent = Number(firstNum.value) + Number(secondNum.value);
});