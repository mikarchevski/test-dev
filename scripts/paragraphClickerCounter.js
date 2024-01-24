let paragraphs = document.querySelectorAll('p');
let input = document.querySelector('input');
input.value = 0;


for (let i =0;  i < paragraphs.length;  i++) {
    paragraphs[i].addEventListener('click', function(){
        ++input.value;
    });
}