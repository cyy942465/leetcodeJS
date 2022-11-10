/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  let ans = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    console.log(mid);
    if (compare(nums, mid, mid - 1) > 0 && compare(nums, mid, mid + 1) > 0) {
      ans = mid;
      break;
    } else if (compare(nums, mid, mid + 1) < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};

function get(nums ,index) {
  if (index === -1 || index == nums.length) {
    return -Infinity;
  } else {
    return nums[index];
  }
}

function compare(nums, index1, index2) {
  if (get(nums, index1) > get(nums, index2)) {
    return 1;
  } else {
    return -1;
  }
}
