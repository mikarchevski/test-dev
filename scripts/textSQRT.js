let dataInput = document.querySelector('#inp');
let fName = document.querySelector('#inp-1');
let lName = document.querySelector('#inp-2');
let patronymic = document.querySelector('#inp-3');
let par = document.querySelectorAll('p');
let btn = document.querySelector('button')
let links = document.querySelectorAll('a');


for (let i=0; i<par.length; i++) {
    par[i].addEventListener('click',function(){
        console.log(this.innerHTML*this.innerHTML);
        this.textContent = this.innerHTML * this.innerHTML;
    })
}