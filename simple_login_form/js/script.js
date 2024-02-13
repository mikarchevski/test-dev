function showPopUp(){
    let headerLoginBtn = document.querySelector('.loginform__header-btn');
    let popup = document.querySelector('.loginform__popup');
    let popupBg = document.querySelector('.loginform__bg');
    let userName = document.querySelector('.loginform__header-user');
    headerLoginBtn.addEventListener('click', function(){
        if (headerLoginBtn.textContent === "Logout") {
            headerLoginBtn.textContent = 'Login';
            userName.textContent = '';
        } else{
        popup.classList.toggle('loginform__popup--show');
        popupBg.classList.toggle('loginform__bg--show');
        }
    });
}

showPopUp();
function removePopUp(){
    let popupBg = document.querySelector('.loginform__bg');
    let popup = document.querySelector('.loginform__popup')
    let intupts = document.querySelectorAll('.loginform__popup-input');
    for (let elem of intupts) {
        elem.value='';
    }
    popup.classList.remove('loginform__popup--show');
    popupBg.classList.remove('loginform__bg--show');
}
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        removePopUp()
    }
});

document.addEventListener('click', (e) => {
    let popupBg = document.querySelector('.loginform__bg');
    if (e.target === popupBg) {
        removePopUp();
    }
});
function closePopUpBtn(){
    let closePopupBtn = document.querySelector('.loginform__popup-close');
    closePopupBtn.addEventListener('click', function(){
        removePopUp();
    });

}
closePopUpBtn();

function inputActive(){
    let input = document.querySelectorAll('.loginform__popup-input');
    for (let elem of input) {
        elem.addEventListener('focus', function func() {
            this.classList.add('loginform__popup-input--active');
        });
        elem.addEventListener('blur', function func() {
            this.classList.remove('loginform__popup-input--active');
        });
    }
}
inputActive();

function loginFormSubmit(){
    let loginBtn = document.querySelector('.loginform__popup-btn');
    let userName = document.querySelector('.loginform__header-user');
    let userInput = document.querySelector('#username');
    let headerLoginBtn = document.querySelector('.loginform__header-btn');
    loginBtn.addEventListener('click', function(e){
        userName.textContent = userInput.value;
        removePopUp();
        headerLoginBtn.textContent = 'Logout';
    });
}

loginFormSubmit()