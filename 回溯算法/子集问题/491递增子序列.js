/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-11-16 16:05:35
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-11-16 16:25:32
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let result = [];
  let path = [];
  
  let backtracking = function(nums, stackIndex) {
    if (path.length >= 2) {
      const a = [...path];
      result.push(a);
    }

    if (stackIndex >= nums.length) {
      return;
    }

    let uniSet = new Set(); // 维护一个集合来记录本层使用过的元素

    for (let i = stackIndex; i < nums.length; i++) {
      // 去重需要搜索之前的值
      if ((path.length > 0 && nums[i] < path[path.length - 1]) || uniSet.has(nums[i])) {
        continue;
      }
      uniSet.add(nums[i]);
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  }

  backtracking(nums, 0);

  return result;
};