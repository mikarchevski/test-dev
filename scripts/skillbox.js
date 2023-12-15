
document.getElementById("btn").onclick = function(e){

    let name = document.getElementById("input-name").value;

    document.getElementById("label__text").innerText = name + " спасибо за проявленный инетрес";
}
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.form-btn');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
         if (isEmptyInput()=== true || onInput()===false)
              { 
                alert("Please enter"); 
            }
         else{
            popupBg.classList.add('active');
            popup.classList.add('active');
        } 
            
    })
});


    var arr12 = [
        document.getElementById('input-name'), 
        document.getElementById('input-phone'),
        document.getElementById('input-email')
    ];

closePopupButton.addEventListener('click',() => {
    removePopup();
    clearInputs();
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        removePopup();
        clearInputs();
    }
});

document.addEventListener('keydown', function(event) {
const key = event.key; // const {key} = event; in ES6+
    if (key === "Escape") {
        removePopup();
        clearInputs();
    }
});
function rmv(input){
    if(input.value) {
      input.classList.remove('alert');
    } else {
      input.classList.add('alert');
    }
}
function isEmptyInput(){
    var arr = [
        document.getElementById('input-name'), 
        document.getElementById('input-phone'),
        document.getElementById('input-email')
    ];
    var count = arr.length;
        for (let i = 0; i<arr.length;i++)
        {
            if (arr[i].value ===''){
                arr[i].classList.add('alert');
                count++;}
                else{ arr[i].classList.remove('alert');}
        }  
       if (count !== arr.length){
        return true;
       }
}


function removePopup(){
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    document.getElementById('input-name').classList.remove('alert');
    document.getElementById('input-phone').classList.remove('alert');
    document.getElementById('input-email').classList.remove('alert');
}

function clearInputs(){
    document.getElementById('input-name').value = '';
    document.getElementById('input-phone').value = '';
    document.getElementById('input-email').value = '';
}


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const input = document.getElementById('input-email');
console.log(input);

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.cssText = 'border: green';
  } else {
    input.style.cssText = 'border: 2px solid red';
    return false;
  }
}

input.addEventListener('input', onInput);

function isEmailValid(value) {
return EMAIL_REGEXP.test(value);}


function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
  }