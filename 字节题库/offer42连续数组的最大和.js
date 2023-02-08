/*
 * @Author: cyy
 * @Date: 2023-02-04 17:38:43
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-04 17:42:00
 * @Description: default
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = []; // 以i结尾的最长子数组的和最大的值
    dp.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(dp[i], max);
    }

    return max;
};