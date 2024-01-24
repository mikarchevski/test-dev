let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
    console.log(event.type);
	if (event.type === "click") {
        elem.style.backgroundColor = "green";
      }
      if (event.type === "dblclick") {
        elem.style.backgroundColor = "yellow";
      }
}