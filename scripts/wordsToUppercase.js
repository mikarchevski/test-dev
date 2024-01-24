let dataInput = document.querySelector('#inp');
let fName = document.querySelector('#inp-1');
let lName = document.querySelector('#inp-2');
let patronymic = document.querySelector('#inp-3');



dataInput.addEventListener('blur', function(){
    let names = dataInput.value.split(' ');
    dataInput.value="";
    for (let i = 0; i < names.length; i++){
        names[i] = names[i][0].toUpperCase() + names[i].substr(1) + " ";
        dataInput.value += names[i];
    }
});