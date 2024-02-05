function task1(){
	let parent = document.querySelector('#parent');
	let arr = [1, 2, 3, 4, 5];

	for (let elem of arr) {
		let p = document.createElement('p');
		p.textContent = elem;
		parent.appendChild(p);
		p.addEventListener('click',function(){
			this.textContent = this.textContent + "!";
		});
		
	}
}

task1();

function task2(){
	let list = document.querySelector('.task2-list');
	let arr = [1, 2, 3, 4, 5];
	for (let el of arr){
		let li = document.createElement('li');
		li.textContent = el;
		list.appendChild(li);
		li.addEventListener('click',function func(){
			this.textContent = this.textContent + "!";
			this.removeEventListener('click',func);
		});
	}
}

task2();

function task3(){
	let table = document.querySelector('.task3-table');
	let columns = document.querySelector(".task3-column");
	let rows = document.querySelector(".task3-row");
	let btn = document.querySelector(".task3-btn");
	let num = 1;
	btn.addEventListener('click',function(){
		console.log(rows.value);
		for (let i = 0; i < rows.value; i++) {
			let tr = document.createElement('tr');
			
			for (let j = 0; j < columns.value; j++) {
				let td = document.createElement('td');
				td.innerHTML = num;
				num++;
				tr.appendChild(td);
			}
			
			table.appendChild(tr);
		}
	});
	
}

task3();


function task4(){
	let table = document.querySelector(".task4-table");
	let arr = [[1, 2, 3], [4, 5, 6], 
	[7, 8, 9], [10, 11, 12]];
	for (let subArr of arr){
		let tr = document.createElement('tr');
		for (let elem of subArr){
			let td = document.createElement('td');
			td.textContent = elem*elem;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
};
task4();

function task5(){
	let table = document.querySelector(".task5-table");
	let employees = [
		{name: 'employee1', age: 30, salary: 400},
		{name: 'employee2', age: 31, salary: 500},
		{name: 'employee3', age: 32, salary: 600},
	];
	for (let employee of employees){
		let tr = document.createElement('tr');
		let td1 = document.createElement('td');
		td1.textContent = employee.name;
		tr.appendChild(td1);
		let td2 = document.createElement('td');
		td2.textContent = employee.age;
		tr.appendChild(td2);
		let td3 = document.createElement('td');
		td3.textContent = employee.salary;
		tr.appendChild(td3);

		table.appendChild(tr);
		td2.addEventListener('click',function(){
			this.textContent = Number(this.textContent)+1;
		})
		td3.addEventListener('click',function(){
			this.textContent = Math.round(Number(this.textContent)+((Number(this.textContent)/100)*10));
		})
	}
};
task5();

function task6(){
	let table = document.querySelector(".task6-table");
	let btn = document.querySelector(".task6-btn");
	btn.addEventListener('click',function(){
		let tr = document.createElement('tr');
		for (let i=1;i<=3;i++){
			let td = document.createElement('td');
			td.textContent = "x";
			tr.appendChild(td);
		}
		table.appendChild(tr);

		let trs = document.querySelectorAll(".task6-table tr");
		for (let tr of trs){
			let td = document.createElement('td');
			td.textContent = "y";
			tr.appendChild(td);
		}
	})
	
};
task6();

function task7(){
	let parent = document.querySelector(".task7-list");
	let btn = document.querySelector(".task7-btn");
	

	btn.addEventListener('click',function(){
		let li = document.createElement('li');
		li.textContent='x';

		
		parent.appendChild(li);

		li.addEventListener('click',function(){
			this.remove();
		});
	});
	
	
};

task7();

function task8(){
	let elems   = document.querySelectorAll('.task8-p');
	
	for (let elem of elems) {
		let remove = document.createElement('a');
		remove.href = '';
		remove.textContent = 'remove';

		elem.appendChild(remove);

		remove.addEventListener('click',function(){
			elem.remove();
			event.preventDefault();
		});
	}
}

task8();

function task9(){
	let elems = document.querySelectorAll('.task9-par');
	// let inp = document.querySelector('.task9-inp');
	// inp.value = elem.textContent
	for (let elem of elems) {
		elem.addEventListener('click', function func() {
			let input = document.createElement('input');
			input.value = elem.textContent;
			elem.textContent = '';
			elem.appendChild(input);
			input.addEventListener('blur',function(){
				elem.textContent = this.value;
				elem.addEventListener('click',func);
			})
			elem.removeEventListener('click', func);
		});
	}
	
}

task9();

function task10(){
	let elem = document.querySelector('.task10-text');
	let btn = document.querySelector('.task10-btn');
	btn.addEventListener('click',function(){
		elem.classList.toggle('task10-text--hide');
		btn.textContent = "show";
	})
}

task10();

function task11(id, text){
		let elem = document.getElementById(id);
		elem.textContent = text;
	};

task11('task11-elem1', 'text2');
task11('task11-elem2', 'text12');

function task12(selector, func) {
	let elems = document.querySelectorAll(selector);
	
	for (let elem of elems) {
		elem.textContent = elem.textContent ** 2;
		func(elem);
		elem.textContent = elem.textContent ** 2;
	}
}