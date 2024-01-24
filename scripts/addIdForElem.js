let elems = document.querySelectorAll('div');


for (let elem of elems){
    elem.addEventListener('click',function(){
        this.textContent = this.textContent + this.dataset.num;
    });
};

