// let li = document.querySelectorAll("li");
// let res = 0;
// let arr=[];
// let newArr=[]
// let s=0;
// for (let elem of li) {
//     let val = elem.innerHTML;
//     arr.push(val);
//     for (let i=0; i<arr.length; i++) {
//         s =arr[i].split('').reduce((acc,num)=>acc+Number(num),0);
//     }
//     if (s=="6"){
//         newArr.push(val)
// }
// console.log(newArr);
// }


let money = 3000;
let keyBoardPrice = 1500;
let mousePrice = 1000;
let headsetPrice = 600;
let ost = 0;
let needMoney = 0;

if (money >=keyBoardPrice) {
    alert("Вы купили клавиатуру");
    ost = money - keyBoardPrice;
    alert("У вас осталось " + ost +"рублей");
    if (ost >=mousePrice){
        alert('Вы купили мышку');
        ost = ost - mousePrice;
        alert("У вас осталось " + ost +"рублей");
        if(ost >= headsetPrice){
            alert("Вы купили наушники");
            ost = ost - headsetPrice;
            alert("У вас осталось " + ost +"рублей");
        }else{
            needMoney = headsetPrice - ost;
            alert("На наушники надо накопить ещё " + needMoney)
        }
    }else{
        needMoney = mousePrice - ost;
        alert('На мышку надо накопить ещё '+needMoney);
    }
} else {
    alert("Вы не можете купить клавиатуру");
    needMoney = keyBoardPrice-money;
    alert('На клавиатуру надо ещё накопить'+needMoney);
}