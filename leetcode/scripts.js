var climbStairs = function(n) {
    let step =0;
    let step2 =1;
    let temp=0
    for (let i =1;i<=n;i++){
       temp=step+step2; 
       step=step2;
       step2=temp;
    }
    console.log(temp);
};


climbStairs(4);
11111
1112
1121
1211
2111
122
212
221
