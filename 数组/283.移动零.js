/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 双指针快慢
  let index = 0; // 数组下标访问
  let now = 0; // 当前非0的数组位置
  let count = 0; // 计算0的个数
  // 遍历数组
  while(index < nums.length) {
    if(nums[index] != 0) {
      nums[now] = nums[index];
      now ++;
      index ++;
    } else {
      index++;
      count++;
    }
  }
  // 赋0
  while(now < nums.length) {
    nums[now++] = 0;
  }
  
};