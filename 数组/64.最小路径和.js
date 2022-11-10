/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  // 动态规划
  let m = grid.length; // 行
  let n = grid[0].length; // 列
  // 初始化动态规划表
  let dp = new Array();
  for(let i = 0; i < m; i++) {
    dp[i] = new Array();
    for(let j = 0; j < n; j++) {
        dp[i][j] = 0;
    }
  }

  dp[0][0] = grid[0][0];

  // 构造动态规划表
  // 第一行
  for(let i = 1; i < n; i++) {
    dp[0][i] = grid[0][i] + dp[0][i -1];
  }
  // 第一列
  for(let i = 1; i < m; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0];
  }

  // 遍历grid
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j  - 1]);
    }
  }

  return dp[m - 1][n - 1];
};