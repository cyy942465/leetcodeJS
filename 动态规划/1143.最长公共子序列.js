/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let len1 = text1.length;
  let len2 = text2.length;

  // 初始化动态规划数组
  let dp = [];
  for (let  i = 0 ; i <= len1; i++) {
    dp[i] = [];
    for (let j = 0 ; j <= len2; j++) {
      dp[i][j] = 0;
    }
  }

  // 遍历字符串
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[len1][len2];
};