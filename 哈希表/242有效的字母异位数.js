/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let map1 = new Map();
  let map2 = new Map();

  // 遍历第一个字符串
  for (let c of s) {
    if (map1.has(c)) {
      const count = map1.get(c);
      map1.set(c, count + 1);
    } else {
      map1.set(c, 1);
    }
  }

  // 遍历第二个字符串
  for (let c of t) {
    if (!map1.has(c)) {
      return false; 
    }

    if (map2.has(c)) {
      const count = map2.get(c);
      map2.set(c, count + 1);
    } else {
      map2.set(c, 1);
    }
  }

  // 比较两个map
  for (let key of map1.keys()) {
    if (map1.get(key) !== map2.get(key)) {
      return false;
    }
  }

  return true;
};