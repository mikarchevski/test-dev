let isLeap = (year)=>{isLeap = new Date(year,2,0).getDate()==29?true:false;return isLeap};
console.log(isLeap(1905));