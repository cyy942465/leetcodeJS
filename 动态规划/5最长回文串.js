/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  const len = s.length;

  if (len < 2) {
    return s
  }

  let maxLen = 1; // 回文串的最长长度
  let begin = 0; // 最长回文的起始位置
  // 定义动态规划方程 dp[i,j]表示i起始到位置j的子串是否为回文串
  // 初始化数组，并且定义起始条件
  let dp = [];

  for (let  i = 0 ; i < len; i++) {
    dp[i] = [];
    for (let  j = 0 ; j < len; j++) {
      if ( i !== j) {
        dp[i][j] = false;
      } else {
        dp[i][j] = true;
      }
    }
  }
  // 遍历字符串
  for (let L = 2; L <= len; L++) { // L为子串的大小
    for (let i = 0; i < len; i++) {
      // 子串右边界
      let j = i + L - 1;
      // 判断右边界是否越界
      if (j >= len) {
        break;
      }

      // 判断dp[i][j]
      if (s.charAt(i) !== s.charAt(j)) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      // 判断是否超过最大
      if (dp[i][j] && L > maxLen) {
        maxLen = L;
        begin = i;
      }
    }
  }

  // 返回最长回文串
  return s.slice(begin,begin + maxLen);
};