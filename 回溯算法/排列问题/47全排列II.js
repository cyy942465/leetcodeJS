/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-11-16 16:46:23
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-11-16 17:01:55
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = [];
  let path = [];
  let used = new Array(nums.length).fill(false);

  let backtracking = function(nums, stackIndex, used) {
    if (stackIndex >= nums.length) {
      const a = [...path];
      result.push(a);
      return; 
    }

    const uniSet = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (used[i] === true || uniSet.has(nums[i])) {
        continue;
      }

      path.push(nums[i]);
      uniSet.add(nums[i]);
      used[i] = true;
      backtracking(nums, stackIndex + 1, used);
      used[i] = false;
      path.pop();
    }
  }

  backtracking(nums, 0, used);

  return result;
};