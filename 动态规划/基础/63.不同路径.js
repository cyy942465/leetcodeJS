/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  let n = obstacleGrid.length;
  let m = obstacleGrid[0].length;

  // 初始化动态规划数组
  let dp = [];
  for (let i = 0 ; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= m; j++) {
        dp[i][j] = 0;
    }
  }

  if (obstacleGrid[0][0] === 0) {
    dp[1][1] = 1;
  } else {
    return 0;
  }

  // 遍历地图构造动态规划数组
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) {
        continue;
      }
      if (obstacleGrid[i - 1][j - 1] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[n][m];
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));