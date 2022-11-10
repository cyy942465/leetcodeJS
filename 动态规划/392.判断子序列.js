/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  const n = s.length;
  const m = t.length;

  // 初始化动态规划数组
  let dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
  }
  //初始化边界条件，dp[i][j] = m表示t中不存在字符j
  for (let i = 0; i < 26; i++) {
    dp[m][i] = m;
  }

  // 遍历t构造dp数组
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      if (Number(t.charAt(i) - 'a') == j) {
        di[i][j] = i;
      } else {
        dp[i][j] = dp[i + 1][j];
      }
    }
  }

  // 遍历s
  let cur = 0;
  for (let i = 0; i < n; i ++) {
    let index = Number(s.charAt(i) - 'a');
    cur = dp[cur][index];
    if (cur === m) {
      return false;
    }
  }
  return true;
  
};