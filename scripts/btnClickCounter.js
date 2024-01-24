let elem = document.querySelector('#click');
let res = document.querySelector('#res');
elem.setAttribute('data-countr','0');
elem.addEventListener('click',function(){
  ++elem.dataset.countr;
})

res.addEventListener('click',function(){
    alert('total click count: ' + elem.dataset.countr);
});