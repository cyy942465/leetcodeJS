/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n == 0) {
        return 0;
    } else if(n == 1 || n == 2) {
        return 1;
    }

    //3位以上
    let sum = [0, 1, 1];
    let count = n - 3;
    let result = 0;
    while(count >= 0) {
        result = sum[1] + sum[2];
        sum[0] = sum[1];
        sum[1] = sum[2];
        sum[2] = result;
        count--;
    }
    return result;
};

let a = 30;
console.log(fib(a));