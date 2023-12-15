let checkDate = (year, month, day)=>{checkDate = new Date(year, month, day).getFullYear()===year &&new Date(year, month, day).getMonth()==month&&new Date(year, month, day).getDate()==day?true:false;
     return checkDate};

     console.log(checkDate(2025, 
        0, 32));