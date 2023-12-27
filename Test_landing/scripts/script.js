var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
    return '<span class="' + currentClass + ''+'test"></span>' + ' '+
            '<span class="' + totalClass + '"></span>';
    },
  },
  thumbs: {
    swiper: swiper,
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper4 = new Swiper(".mySwiper4", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  pagination: {
    el: ".swiper-pagination1",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
    return '<span class="' + currentClass + '"></span>' + ' '+
            '<span class="' + totalClass + '"></span>';
    },
  },
  thumbs: {
    swiper: swiper3,
  },
});
let popup = document.getElementById('popup');
let body = document.querySelector('body');
let wrap = document.querySelector('.popup-wrap');
let openPopupButtons = document.querySelectorAll('.form-btn');


function popupToggle(){
  
  body.classList.toggle('no-scroll');
  popup.classList.toggle('active');
  wrap.classList.toggle('popup-wrap--active');
  clearInputs();
  
}

wrap.onclick = function(e){
  popupToggle();
  removePopup();
}
document.getElementById("popup-submit").onclick = function(e){
  let name = document.getElementById("input-name").value;
  document.getElementById("label__text").innerText = name + " спасибо за проявленный инетрес";
}

document.addEventListener('keydown', function(event) {
  const key = event.key; // const {key} = event; in ES6+
      if (key === "Escape") {
          removePopup();
          clearInputs();
      }
  });

function removePopup(){
    wrap.classList.remove('popup-wrap--active');
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

function rmv(input){
  if(input.value) {
    input.classList.remove('alert');
  } else {
    input.classList.add('alert');
  }
}

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.cssText = 'border: green';
  } else {
    input.style.cssText = 'border: 2px solid red';
    return false;
  }
}