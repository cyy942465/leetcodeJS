/*
 * @Author: cyy
 * @Date: 2023-02-02 21:53:39
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-02 21:58:00
 * @Description: default
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 动态规划,dp[i][j]表示到i行j列有几种不同的路径
    let dp = [];
    for (let i = 0; i < m; i++) {
        dp.push([]);
        for(let j = 0; j < n; j++) {
            if (i != 0 && j != 0) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = 1;
            }
        }
    }

    for (let i = 1; i < m; i ++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};