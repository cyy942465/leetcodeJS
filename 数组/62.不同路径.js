/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  if(m == 1 && n == 1) {
    return 0;
  }
  let dp = new Array();
  // 初始化动态规划表
  // dp[i][j]表示走到i和j的不同路径,i表示列，j表示行
  // dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  for(let i = 0 ; i < n; i++) {
    dp[i] = new Array();
    for(let j = 0; j < m; j++) {
      dp[i][j] = 1;
    }
  }

  // 构造动态规划表
  for(let i = 1; i < n; i++) {
    for(let j = 1; j < m; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[n - 1][m - 1]; 
};