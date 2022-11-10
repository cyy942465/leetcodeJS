/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  let left = 0;
  let right = x;
  let ans = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid <= x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};