/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  let map = new Map();

  // 第一次遍历
  for (let i = 0 ; i < s.length; i++) {
    const c = s.charAt(i);
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      let count = map.get(c);
      map.set(c, count + 1);
    }
  }

  // 第二次遍历
  for (let i = 0 ; i < s.length; i++) {
    const c = s.charAt(i);
    if (map.get(c) === 1) {
      return i;
    }
  }
  return -1;
};
