let select  = document.querySelector('#select');
let par = document.querySelector('p');;
select.addEventListener('change', ()=>{
    let isLeap = (year)=>{
        isLeap = new Date(year,2,0).getDate()==29?true:false;
        return isLeap;
    }
    par.textContent = isLeap(select.value);
});