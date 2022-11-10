/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n == 1 || n == 2) {
        return 1;
    } else if (n == 0) {
        return 0;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};

let a = 2;
console.log(fib(a));
let b = 3;
console.log(fib(b));
let c = 30;
console.log(fib(c));