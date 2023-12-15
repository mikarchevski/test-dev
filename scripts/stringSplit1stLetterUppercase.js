function arrOfStr(str){

let arr = str.split(' ');
let res;
let arr2 = [];
for (let i = 0; i < arr.length; i++)
{
    let fst = arr[i].substr(0,1).toUpperCase();
    //  return str.substr(0,1).toUpperCase()+str.substr(1);
    let ost = arr[i].substr(1, arr[i].length);
    res = fst+ost + " ";
    
    arr2.push(res);
}
return(arr2);}


//console.log(devide(20));

let res = arrOfStr("test Eest1 Sest2 test3 test4 test5 test6");
console.log(res);