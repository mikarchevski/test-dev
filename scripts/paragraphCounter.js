let dataInput = document.querySelector('#inp');
let fName = document.querySelector('#inp-1');
let lName = document.querySelector('#inp-2');
let patronymic = document.querySelector('#inp-3');
let par = document.querySelectorAll('p');
let btn = document.querySelector('button')



btn.addEventListener('click',function(){
    for (let i = 0;i< par.length;i++){
        par[i].textContent = par[i].textContent + i
    }
});