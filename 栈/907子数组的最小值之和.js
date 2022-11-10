/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumSubarrayMins = function(arr) {
  // 子数组
  let len = arr.length;
  let stack = [];
  let left = new Array(len).fill(0);
  let right = new Array(len).fill(0);

  // 从左向右遍历
  for (let i = 0 ; i < len; i++) {
    while (stack.length && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    left[i] = i - (stack.length === 0 ? -1 : stack[stack.length - 1]);
    stack.push(i);
  }
};