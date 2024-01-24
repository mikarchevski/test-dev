let input = document.querySelector('input');
let increaseBtn = document.querySelector('#inc');
let reduceBtn = document.querySelector('#red');
input.value=0;
increaseBtn.addEventListener('click',function(){
    ++input.value;
});

reduceBtn.addEventListener('click',function(){ 
    --input.value;
    if (input.value <= 0){
        input.value = 0;
    }
});