/*
 * @Author: cyy
 * @Date: 2023-01-05 21:36:02
 * @LastEditors: cyy
 * @LastEditTime: 2023-01-30 16:43:07
 * @Description: default
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let dp = []; // 和为i的子集，求得的最大和

    // 先求取子集和
    let target = 0;
    for(let i = 0; i < nums.length; i++) {
        target += nums[i];
    }
    if (target % 2 === 1) {
        return false;
    }
    target = target / 2;

    // 初始化dp数组

};