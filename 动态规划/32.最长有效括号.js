/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  let dp = new Array(s.length).fill(0); // dp[i]表示以i结尾的最长有效括号子串的长度
  let max = 0;

  for (let i = 1 ; i < s.length; i++) {
    if (s.charAt(i) === ')') {
      if (s.charAt(i - 1) === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) === '(') {
        dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      max = Math.max(dp[i],max);
    }
  }

  return max;
};