/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  let len = nums.length;
  let result = 1;
  let dp = [];
  // 初始化动态规划数组
  for (let i = 0 ; i < len; i++) {
    dp[i] = 1;
  }

  // 遍历数组
  for (let i = 1 ; i < len; i++) {
    let max = 0; // 寻找前面符合条件的最大的dp[j]
    const cur = nums[i];
    for (let j = 0; j < i; j++) {
      if (cur > nums[j] && max < dp[j]) {
        max = dp[j];
      } else {
        continue;
      }
    }
    dp[i] += max;
    if (dp[i] > result) {
      result = dp[i];
    }
  }

  return result;
};