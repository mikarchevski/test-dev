function task1() {
    let res = document.querySelector('.task1-res');
    let input = document.querySelector('.task1-input');
   
    input.addEventListener('blur',() => {
        Number(input.value)<0?res.textContent="Negative" : res.textContent="positive";
    });
    
}

task1();

var task2=function(){
    let str = document.querySelector('.task2-str');
    let res = document.querySelector('.task2-length');
    str.addEventListener('blur',() => {
        res.textContent = "Длина строки = " + str.value.length;
    });

    
}

task2();

let task3 = () =>{
     let str = document.querySelector('.task3-str');
     let res = document.querySelector('.task3-last');
     str.addEventListener('blur',() => {
        res.textContent = "Последний символ:" + str.value.slice(-1);
     });
     
}
task3();

function task4(){
    let num = document.querySelector('.task4-num');
    let res = document.querySelector('.task4-res');
    num.addEventListener('blur',function(){
        Number(num.value)%2===0?res.textContent = "Чётное":res.textContent = "Не чётное"
    })
}
task4();

let task5 = () => {
    let firstWord = document.querySelector('.task5-first');
    let secondWord = document.querySelector('.task5-second');
    let res = document.querySelector('.task5-res');
    let btn = document.querySelector('.task5-compare');
    btn.addEventListener('click',() => {
        firstWord.value[0] === secondWord.value[0]? res.textContent = "Одинаковые буквы": res.textContent="Не одинаковые";
    });
};

task5();

function task6() {
    let word = document.querySelector('.task6-str');
    let res = document.querySelector('.task6-res');
    word.addEventListener('blur', function(){
        word.value.slice(-1)==="ь"?res.textContent=word.value[word.value.toString().length-2]:console.log('-');
    });
};

task6();

function task7() {
    let num = document.querySelector('.task7-num');
    let res = document.querySelector('.task7-res');
    num.addEventListener('blur', function(){
       res.textContent="Первая цифра числа:"+Number(num.value[0]);
    });
};

task7();

function task8() {
    let num = document.querySelector('.task8-num');
    let res = document.querySelector('.task8-res');
    num.addEventListener('blur', function(){
       res.textContent="Последняя цифра числа:"+ String(num.value).substr(-1);
    });
};

task8();

function task9() {
    let num = document.querySelector('.task9-num');
    let res = document.querySelector('.task9-res');
    num.addEventListener('blur', function(){
       res.textContent=  Number(num.value[0])+ Number(String(num.value).substr(-1));
    });
};

task9();

function task10() {
    let num = document.querySelector('.task10-num');
    let res = document.querySelector('.task10-res');
    num.addEventListener('blur', function(){
       res.textContent= num.value.length;
    });
};

task10();

function task11() {
    let num1 = document.querySelector('.task11-num1');
    let num2 = document.querySelector('.task11-num2');
    let res = document.querySelector('.task11-res');
    let btn = document.querySelector('.task11-btn');
    btn.addEventListener('click', function(){
       res.textContent = Number(num1.value[0])+Number(num2.value[0]);
    });
};

task11();

function task12() {
    let inp = document.querySelector('.task12-arr');
    let res = document.querySelector('.task12-res');
    let btn = document.querySelector('.task12-btn');

    btn.addEventListener('click',()=>{
        let arr = inp.value.split(',');
        let newArr = arr.map((x)=>Math.sqrt(x));
        res.textContent = newArr;
    });
};

task12();

function task13() {
    let inp = document.querySelector('.task13-arr');
    let res = document.querySelector('.task13-res');
    let btn = document.querySelector('.task13-btn');

    btn.addEventListener('click',()=>{
        let total = 0;
        let arr = inp.value.split(',');
        let newArr = arr.map((x)=>Math.sqrt(x));
        let sum = newArr.reduce((acc, x)=>acc+x,0);
        console.log(sum)
        res.textContent = sum;
    });
};

task13();

function task14() {
    let inp = document.querySelector('.task14-inp');
    let res = document.querySelector('.task14-res');
    let btn = document.querySelector('.task14-btn');

    btn.addEventListener('click',()=>{
        let arr = inp.value.split("");
        console.log(arr);
        res.textContent = arr;
    });
};

task14();

function task15() {
    let inp = document.querySelector('.task15-inp');
    let res = document.querySelector('.task15-res');
    let btn = document.querySelector('.task15-btn');

    btn.addEventListener('click',()=>{
        let arr = inp.value.split("");
        console.log(arr);
        res.textContent = arr;
    });
};

task15();

function task16() {
    let inp = document.querySelector('.task16-inp');
    let res = document.querySelector('.task16-res');
    let btn = document.querySelector('.task16-btn');

    btn.addEventListener('click',()=>{
        let arr = inp.value.split("");
        console.log(arr);
        res.textContent = arr.reverse().join("");
    });
};

task16();

function task17() {
    let inp = document.querySelector('.task17-inp');
    let res = document.querySelector('.task17-res');
    let btn = document.querySelector('.task17-btn');

    btn.addEventListener('click',()=>{
        let arr = inp.value.split("");
        res.textContent = arr.reduce((acc,val)=>Number(acc) +Number(val),0);
    });
};

task17();

function task18() {
    let inp = document.querySelector('.task18-inp');
    let res = document.querySelector('.task18-res');
    let btn = document.querySelector('.task18-btn');

    btn.addEventListener('click',()=>{
        let arr = inp.value.split("");
       console.log(arr.indexOf("0"));
       
    });
};

task18();

function halfLength(){
    let arr = [1,2,3,4,5,6,7];
    for (let i=0;i<arr.length/2; i++){
        console.log(arr[i]);
    }
}
halfLength();