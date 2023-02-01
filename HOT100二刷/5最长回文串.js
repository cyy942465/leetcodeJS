/*
 * @Author: cyy
 * @Date: 2023-01-30 17:36:29
 * @LastEditors: cyy
 * @LastEditTime: 2023-01-30 17:55:28
 * @Description: default
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length;
    if (len < 2) {
        return s;
    }

    let maxLen = -1; // 最长回文串的长度
    let begin = 0; // 最长回文串的起始位置
    
    // 动态规划数组初始化
    let dp = [];
    for (let i = 0 ; i < len; i++) {
        dp[i] = [];
        for (let j = 0 ; j < len; j++) {
            if (i !== j) {
                dp[i][j] = false;
            } else {
                dp[i][j] = true;
            }
        }
    }

    // 遍历字符串
    for(let L = 2; L <= len; L++) {
        // 子串长度
        for (let i = 0; i < len; i++) {
            let j = i + L - 1;
            if (j >= len) {
                break;
            }

            if (s.charAt(i) !== s.charAt(j)) {
                dp[i][j] = false;
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            if (dp[i][j] && L > maxLen) {
                maxLen = L;
                begin = i;
            }
        } 
    }

    return s.slice(begin, begin + maxLen);
};