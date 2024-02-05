let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block  = document.querySelector('#block');

button.addEventListener('click', function(e) {
	block.classList.add('active');
	e.stopImmediatePropagation();
});

parent.addEventListener('click', function() {
	block.classList.remove('active');
});