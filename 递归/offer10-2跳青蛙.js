/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
  const MOD = 1000000007
  if (n === 0 || n === 1) {
    return 1;
  }
  let p = 1, q = 1, r = 1;
  for (let i = 2; i <= n; ++i) {
      p = q; 
      q = r; 
      r = (p + q) % MOD;
  }
  return r;
};

