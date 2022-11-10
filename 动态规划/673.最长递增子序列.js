/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumberOfLIS = function(nums) {
  let n = nums.length;
  let maxLength = 0; // 寻找最大的dp
  let ans = 0; // 寻找最大的cnt
  // 初始化动态规划数组
  let dp = new Array(n).fill(0); // 以nums[i]结尾的最长上升子序列长度
  let cnt = new Array(n).fill(0);// 以nums[i]结尾的最长上升子序列个数
  // 遍历数组
  for(let i = 0; i < n; i++) {
    dp[i] = 1;
    cnt[i] = 1;
    for(let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) { //可以将nums[i]放在dp[j]的最长序列之后
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          cnt[i] = cnt[j]; // 更新cnt数组
        } else if (dp[j] + 1 === dp[i]) { // 计数的两种情况
          cnt[i] += cnt[j]; // 更新cnt数组
        }
      }
    }
    // 更新maxLength和ans
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      ans = cnt[i]; // 出现更长的子序列，重置计数
    } else if (dp[i] === maxLength) {
      ans += cnt[i]; // 统计所有最长子序列的个数
    }
  }
  return ans;
};