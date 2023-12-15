function test(arr,callback){
    let res = [];
    
    for (let i=0; i<arr.length; i++){
        res.push(callback(arr[i]));
    }
    return res;
}

let result = test(["test1","test2","test3","test4"], function(str){
    return str.split('').reverse().join('');
    
});
console.log(result);