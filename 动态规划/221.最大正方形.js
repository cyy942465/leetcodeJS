/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let result = 0; // 存储结果

  // 初始化动态规划方程
  // dp[i][j]表示matrix[i][j]为右下角的正方形最长边长
  // matrix[i][j] === 0, dp[i][j] = 0;
  // matrix[i][j] === 1, dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= m; j++) {
      dp[i][j] = 0;
    }
  }

  // 遍历matrix
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (matrix[i - 1][j - 1] === '0') {
        dp[i][j] = 0;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1],dp[i - 1][j - 1]) + 1;
        if (dp[i][j] > result) {
          result = dp[i][j];
        }
      }
    }
  }

  return result * result;
};