let par = document.querySelector('p');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
	setInterval(() => {
		Number(par.textContent)<=0?clearInterval():par.textContent=  Number(par.textContent)-1;
	}, 1000);
});f