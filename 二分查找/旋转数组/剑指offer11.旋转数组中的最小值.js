/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else if (numbers[mid] < numbers[right]) {
      right = mid; // 有可能刚好是mid，不能-1
    } else {
      right--;
    }
  }

  return numbers[left];
};