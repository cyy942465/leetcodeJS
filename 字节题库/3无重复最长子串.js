/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length;
    }
    let max = 0;
    
    // 滑动窗口
    for (let i = 0; i < s.length; i++) {
        let set = new Set();
        let count = 0;
        for (let j = i; j < s.length; j++) {
            const ch = s.charAt(j);
            if (set.has(ch)) {
                break;
            } else {
                set.add(ch);
                count ++;
                if (count > max) {
                    max = count;
                }
            }
        }
    }
    
    return max;
};