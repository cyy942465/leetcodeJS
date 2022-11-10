/**
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function(n) {
  // 动态规划
  let dp = []; // dp[i]表示将i拆分后各个数最大的乘积
  // 初始化动态规划数组
  dp.push(0);
  dp.push(0);
  for (let i = 2; i <= n; i++ ) {
    let max = 0;
    for (let j = 1; j < i; j++ ) {
      max = Math.max(max, (Math.max(j * (i - j), j * dp[i - j]))) ;
    }
    dp[i] = max;
  }

  return dp[n];
};