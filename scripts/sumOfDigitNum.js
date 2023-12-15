function sumOfDigit(num){
    let arr = num.toString().split('');

    let sum = (arr.reduce((accum,val)=>accum + Number(val), 0));
    console.log(sum);
    console.log(arr);
}

let res = sumOfDigit(101);
console.log(res);