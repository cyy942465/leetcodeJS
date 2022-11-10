/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  // 初始化动态规划数组,dp[i]表示前i位最大和
  let dp = [];
  dp.push(nums[0]);
  let max = nums[0];

  // 遍历数组
  for (let i = 1 ; i < nums.length; i++) {
    const cur = dp[i - 1] + nums[i];
    if(cur > nums[i]) {
      dp.push(cur);
    } else {
      dp.push(nums[i]);
    }
    if (dp[i] > max) {
      max = dp[i];
    }
  }

  return max;
};
