/*
 * @Author: cyy
 * @Date: 2023-01-30 17:00:28
 * @LastEditors: cyy
 * @LastEditTime: 2023-01-30 17:06:41
 * @Description: default
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0; // 最长长度
    const len = s.length;

    // 遍历字符串
    for (let i = 0 ; i < len; i++) {
        let set = new Set();
        let count = 0;
        for (let j = i; j < len; j++) {
            const ch = s.charAt(j);
            if (set.has(ch)) {
                break;
            } else {
                count++;
                set.add(ch);
                if (count > max) {
                    max = count;
                }
            }
        }
    }

    return max;
};