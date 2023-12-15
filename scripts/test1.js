let li = document.querySelectorAll("li");
let res = 0;
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
    
    // for (let i=0; i<newArr.length; i++) {
    //     newArr[i]=="6"?newArr[i]=+elem.innerHTML:val;
    // }
    // if (newArr[i]=="6"){
    //     console.log();
    // }
}
console.log(newArr);
// for (let i=0; i<newArr.length; i++) {
//     //console.log(newArr[i]);
//     if (newArr[i]=="6"){
//         console.log();
//     }
//     //return newArr[i];
// }
//console.log( newArr);
//console.log(li.innerHTML);
// for (let i=0; i<newArr.length; i++) {
//         //console.log(newArr[i]);
//         newArr[i]==6?console.log(li.innerHTML):console.log('-');
// }