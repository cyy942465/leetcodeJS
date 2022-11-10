/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  let len = nums.length;
  // 不存在的情况
  if (nums.length === 0 || target < nums[0] || target > nums[len - 1]) {
    return [-1, -1];
  }
  // 二分搜索
  let left = 0;
  let right = len - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  let start = -1;
  let end = -1;

  if (nums[left] === target) {
    start = left;
    end = findEnd(nums,start);
  } else if (nums[left + 1] === target) {
    start = left + 1;
    end = findEnd(nums,start);
  } 

  return [start, end];
};

function findEnd(nums,idx) {
  const t = nums[idx];
  let index = idx;
  while (nums[index] === t) {
    index++;
  }

  return index - 1;
}