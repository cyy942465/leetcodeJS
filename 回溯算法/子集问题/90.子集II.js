/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-11-16 15:30:25
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-11-16 16:02:55
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  let result = [];
  let path = [];
  let used = new Array(nums.length).fill(false);

  nums.sort(); // 重复的元素相邻

  let backtracking = function(nums, stackIndex, used) {
    const a = [...path];
    result.push(a);
    if (stackIndex >= nums.length) {
      return;
    }

    for (let i = stackIndex; i < nums.length; i++ ) {
      // 去掉同一层重复的数
      if (i > 0 && nums[i - 1] === nums[i] && used[i - 1] === false) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      backtracking(nums, i + 1, used);
      used[i] = false;
      path.pop();
    }
  }

  backtracking(nums, 0, used);
  
  return result;
};

console.log(subsetsWithDup([1, 2, 2]));