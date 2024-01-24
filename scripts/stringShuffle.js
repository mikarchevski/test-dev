
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    let inp = document.querySelector('input');
    let text = inp.value.split('');
    for (let i=0; i<text.length-1; i++){
        let j = Math.floor(Math.random() * (i+1));
        let tmp = text[i];
        text[i] = text[j];
        text[j] = tmp;
     }
    inp.value = text.join('');
});