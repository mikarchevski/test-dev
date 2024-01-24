let inp = document.querySelector('input');
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    inp.value="";
    for (let i=0; i<=7;i++) {
     inp.value += Math.round(Math.random()*9);
    }
});