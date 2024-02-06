let text = "sd01230fsd0ajb0";
let arr = text.split("");
let res = arr.map((val,index)=>val==="0"?index:"");
console.log(res.filter((e)=>e !='')[2]);