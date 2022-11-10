/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  // 处理极端情况
  if (nums.length === 1) {
    return 1;
  }

  let i = 0; // 慢指针
  let j = 1; // 快指针

  // 遍历数组
  while(j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      nums[i + 1] = nums[j];
      i++;
      j++;
    }
  }
  return i + 1;
};