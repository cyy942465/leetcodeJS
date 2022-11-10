/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  // 判断数组长度为1的情况
  if(nums.length == 1) {
    if(nums[0] >= target) {
      return 1;
    } else {
      return 0;
    }
  }

  // 双指针
  let low = 0;
  let high = 1;
  let result = nums.length + 1;
  let now = nums[low] + nums[high];
  
  if(nums[low] >= target || nums[high] >= target) {
    return 1;
  }
  if(now >= target) {
    result = 2;
  }

  while(high < nums.length) {
    if(low == high || now < target) {
      high++;
      now += nums[high];
    } else if(now >= target) {
      now -= nums[low]
      low++;
    }
    // 计算长度并比较
    if(now >= target) {
      // 计算区间长度
      let len = high - low + 1;
      if(len < result) {
        result = len;
      } 
    }
  }

  if(result != nums.length + 1) {
    return result;
  } else {
    return 0;
  }
};