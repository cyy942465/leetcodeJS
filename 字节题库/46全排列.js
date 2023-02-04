/*
 * @Author: cyy
 * @Date: 2023-02-03 17:36:18
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-03 17:43:03
 * @Description: default
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let path = [];
    let used = new Array(nums.length).fill(false);

    let backtracking = function(nums, stackIndex,used) {
        if (stackIndex >= nums.length) {
            const a = [...path];
            result.push(a);
            return;
        }
        
        for (let i = 0 ; i < nums.length; i++) {
            if (used[i] === false) {
                path.push(nums[i]);
                used[i] = true;
                backtracking(nums, stackIndex + 1, used);
                used[i] = false;
                path.pop();
            } else {
                continue;
            }
        }
    }

    backtracking(nums, 0, used);

    return result;
};