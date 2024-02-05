let elem = document.querySelector('#elem');

setInterval(function() {
	
	Number(elem.value) <=0?clearInterval():elem.value = Number(elem.value) - 1;
}, 1000);
