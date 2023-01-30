/*
 * @Author: cyy
 * @Date: 2023-01-05 20:24:31
 * @LastEditors: cyy
 * @LastEditTime: 2023-01-05 20:32:21
 * @Description: default
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = []; // 表示爬到第i个台阶所需的最小花费
    // 初始化动态规划数组
    dp[0] = cost[0];
    dp[1] = cost[1];
    const len = cost.length;

    // 从前往后访问动态规划数组
    for(let i = 2; i < len; i++) {
        dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
    }

    console.log(dp);
 
    return Math.min(dp[len - 1], dp[len - 2]);
};