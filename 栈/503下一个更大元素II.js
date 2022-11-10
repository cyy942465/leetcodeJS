/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
  const len = nums.length;
  let result = new Array(len).fill(-1); // 存放结果
  let stack = []; // 使用一个单调栈来辅助这一次遍历,保存下标
  // 循环两次数组
  for (let i = 0; i < len * 2 - 1; i ++) {
    const index = i % len;
    //  栈顶元素小于数组
    while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
      result[stack[stack.length - 1]] = nums[index];
      stack.pop();
    }
    stack.push(index);
  }

  return result;
};