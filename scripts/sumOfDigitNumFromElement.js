let li = document.querySelectorAll("li");
let arr=[];
let newArr=[]
let s=0;
for (let elem of li) {
    let val = elem.innerHTML;
    arr.push(val);
    for (let i=0; i<arr.length; i++) {
        s =arr[i].split('').reduce((acc,num)=>acc+Number(num),0);
    }
    if (s=="6"){
        newArr.push(val)
    }
console.log(newArr);
}