let select = document.querySelector('#select');
let btn = document.querySelector('#button');
let data = new Date();
let month = data.getMonth();
let monthNames = ["Январь", "Февраль", "Март"];
console.log(monthNames[month]);
select.value = monthNames[month];