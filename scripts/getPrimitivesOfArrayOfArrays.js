function test(arr){
    for (let elem of arr){
        typeof elem=="object" ? test(elem):console.log(elem);
    }

}

test([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);