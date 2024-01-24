let dataInput = document.querySelector('#inp');
let fName = document.querySelector('#inp-1');
let lName = document.querySelector('#inp-2');
let patronymic = document.querySelector('#inp-3');
let par = document.querySelectorAll('p');
let btn = document.querySelector('button')
let links = document.querySelectorAll('a');


btn.addEventListener('click',function(){
    for (let i = 0;i< links.length;i++){
        if (links[i].href.indexOf('http://')===0){
            links[i].innerHTML = links[i].innerHTML + "&rarr;";
        }
    }
});