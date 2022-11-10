/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
  let max = nums[0];
  let count = 1;
  let result = 1;
  // 遍历数组
  let n = nums.length;
  for(let i = 1 ; i < n; i++) {
    if(nums[i] > max) {
      count++;
      max = nums[i];
    } else {
      if(count > result) {
        result = count;
        max = nums[i];
        count = 1;
      } else {
        count = 1;
        max = nums[i];
      }
    }
  }

  if(count > result) {
    result = count
  }

  return result;
};