function test(obj){
    for (let value of Object.values(obj)){
        typeof value =="object" ? test(value):console.log(value);
    }

}

test({a: 1, 
    b: {c: 2, d: 3, e: 4}, 
    f: {g: 5, j: 6, 
        k: {l: 7,
             m: {n: 8, o: 9}}}});