/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[right] > nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
};