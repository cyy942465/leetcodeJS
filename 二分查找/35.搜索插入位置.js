/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let lastMid = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    lastMid = mid;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (target < nums[lastMid]) {
    return lastMid;
  } else {
    return lastMid + 1;
  }
};