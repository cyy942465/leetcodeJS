/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-11-17 16:44:59
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-11-21 21:01:13
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let result = [];
  let path = [];
  let used = new Array(s.length).fill(false); // 字符串中被使用了的位置

  let backtracking = function(s, stackIndex, used) {
    if (stackIndex >= s.length) {
      const a = path.join('');
      result.push(a);
      return;
    }

    let uniSet = new Set();
    for (let i = 0; i < s.length; i ++) {
      const ch = s.charAt(i);
      if (used[i] === true || uniSet.has(ch) ) {
        continue;
      }

      used[i] = true;
      uniSet.add(ch);
      path.push(ch);
      backtracking(s, stackIndex + 1, used);
      path.pop();
      used[i] = false;
    }
  }

  backtracking(s, 0, used);

  return result;
};