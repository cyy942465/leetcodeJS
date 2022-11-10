/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  const len = nums.length;
  let res = nums[0]; // 当前可以到达的最远距离
  let i = 0; // 当前的位置

  while (i <= res) {
    // 在当前位置能到的最远距离
    let distance = i + nums[i];
    if (res < distance) {
      res = distance;
    }
    if (res >= len - 1) {
      return true;
    }
    i++;
  }

  return false;
};