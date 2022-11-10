/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  // 初始化动态规划数组,dp[i]表示前i间房间能偷到的最大金额
  let dp = [];
  dp.push(nums[0]);
  if (nums[1] > dp[0]) {
    dp.push(nums[1]);
  } else {
    dp.push(nums[0]);
  }

  // 遍历数组
  for (let i = 2; i < nums.length; i++) {
    let p1 = dp[i - 2] + nums[i];
    let p2 = dp[i - 1];
    if (p1 > p2) {
      dp.push(p1);
    } else {
      dp.push(p2);
    }
  }

  return dp[nums.length - 1];
};