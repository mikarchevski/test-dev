let btn = document.querySelector('button');
let inp = document.querySelector('input');
let par = document.querySelector('p');

btn.addEventListener('click',function(){
    let res = 1;
    let num = Number(inp.value);
    for (let i=2; i<=num; i++){
       
        res = res*i;
    }
    console.log(res);
});