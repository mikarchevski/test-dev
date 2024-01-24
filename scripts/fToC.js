let btn = document.querySelector('button');
let inp = document.querySelector('input');
let par = document.querySelector('p');

btn.addEventListener('click',function(){
    par.textContent = Math.round(((Number(inp.value)-32)*(5/9))*10)/10;
});