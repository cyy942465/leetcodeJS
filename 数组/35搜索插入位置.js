/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0; // 低位
  let high = nums.length - 1; // 高位
  
  // if(target > nums[high]) {
  //   return high + 1;
  // } else if(target < nums[low]) {
  //   return 0;
  // }

  while(low <= high) {
    let mid = low + (high - low) / 2;
    if(nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

console.log(searchInsert([1,3,5,6],5));