/*
 * @Author: cyy
 * @Date: 2023-01-05 20:16:59
 * @LastEditors: cyy
 * @LastEditTime: 2023-01-05 20:19:20
 * @Description: default
 */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) {
        return n;
    }

    let dp = [];
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }

    return dp[n];
};