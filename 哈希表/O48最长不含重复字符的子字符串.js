/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let slow = 0; // 慢指针，子串的起点
  let count = 0; // 当前的计数
  let max = 0; // 最长的子串

  let map = new Map(); // 记录出现的字符和出现的位置
  
  // 遍历字符串
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    
    if (!map.has(c)) {
      map.set(c, i);
      count++;
    } else {
      // 更新max
      if (max < count) {
        max = count;
      }
      let step = map.get(c) - slow; // 慢指针要移动的步数
      while(step >= 0) {
        map.delete(s.charAt(slow++));
        step--;
        count--;
      }
      count++;
      map.set(c, i);
    }
  }
  if (max < count) {
    max = count;
  }
  return max;
};
