let dataInput = document.querySelector('#inp');
let fName = document.querySelector('#inp-1');
let lName = document.querySelector('#inp-2');
let patronymic = document.querySelector('#inp-3');



dataInput.addEventListener('blur', function(){
    let arr = dataInput.value.split('');
    let newArr = arr.reverse();
    dataInput.value = newArr.join('-');
});