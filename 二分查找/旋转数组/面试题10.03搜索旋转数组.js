/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var search = function(arr, target) {
  let len = arr.length;
  let left = 0;
  let right = len - 1;
  let result = -1;
  // 排除最左边的情况
  if (arr[left] === target) {
    return 0;
  }

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      result = mid;
      break;
    }
    if (arr[left] < arr[mid]) {
      if (arr[left] <= target && arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (arr[left] > arr[mid]) {
      if (arr[mid] < target && arr[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      left++;
    }
  }

  if (result === -1) {
    return -1;
  } else {
    while (arr[result] === target) {
      result--;
    }
    return result + 1;
  }
};