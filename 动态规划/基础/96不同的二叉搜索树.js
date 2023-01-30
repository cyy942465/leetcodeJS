/*
 * @Author: cyy
 * @Date: 2023-01-05 20:44:20
 * @LastEditors: cyy
 * @LastEditTime: 2023-01-05 21:25:17
 * @Description: default
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n + 1);
    dp.fill(0);
    dp[0] = 1;

    for(let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) { // j为根节点时
            dp[i] += dp[j - 1] * dp[i - j]; // 分别计算以各个结点为根节点的二叉搜索树个数
            // dp[j - 1]为左子树的,比i小的各个节点
            // dp[i - j]为右子树，比i大的各个节点
        }
    }
    console.log(dp);

    return dp[n];
};