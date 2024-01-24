let list = document.querySelector('#elem');
let listItem = list.querySelector('li');

list.addEventListener('click',elemClick);

function elemClick(e){
    if (e.target.tagName.toLowerCase() === 'li'){
        e.target.textContent = e.target.textContent + '!';
    }
    console.log(e.target.tagName);
}