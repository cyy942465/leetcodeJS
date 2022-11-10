/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  const n = s.length; 
  let i = 0;
  let j = 0;
  let result = 0;
  let max = 0;
  // 哈希表存储出现过的字符
  let set = new Set();

  while(j <= n - 1) {
    if(!set.has(s.charAt(j))) {
      set.add(s.charAt(j));
      j++;
      result++;
      // 更新max
      if(result > max) {
        max = result;
      }
    } else {
      // 找到重复的位置
      const ch = s.charAt(j);
      const index = s.indexOf(ch,i);
      // 删除字符
      for(let k = i; k < index; k++) {
        set.delete(s.charAt(k));
      }
      i = index + 1;
      result = j - i + 1;
      j++;
    }
  }

  return max;
};
