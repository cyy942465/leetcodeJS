/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let result = 0;

  // 构造动态规划数组
  let dp = [];
  for (let i = 0 ; i <= n; i++) {
    dp [i] = [];
    for (let j = 0; j <= m; j++) {
      dp[i][j] = 0;
    }
  }

  // 遍历两个数组
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; 
        if (dp[i][j] > result) {
          result = dp[i][j];
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return result;
};