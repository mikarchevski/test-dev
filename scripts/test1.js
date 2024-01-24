let elem = document.querySelector('input');
let par = document.querySelector('p');



elem.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        par.textContent += elem.value;
        elem.value='';}
        
});