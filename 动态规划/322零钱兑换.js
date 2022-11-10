/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  if (amount === 0 ) {
    return 0;
  }

  // 初始化dp数组,dp[i]表示金额为i所需的最少硬币
  const max = amount + 1;
  let dp = [];
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    dp[i] = max;
  }

  // 开始dp
  for (let i = 1 ; i <= amount; i++) {
    for (let j = 0 ; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i],dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};