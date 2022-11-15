/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let result = [];
  let path = [];
  // 判断回文串函数
  let isPal = function(s, start, end) {
    for (let i = start, j = end; i < j; i++, j--) {
      if (s[i] !== s[j]) {
        return false
      }
    }

    return true;
  }

  // 使用stackIndex来模拟分割线,stackIndex为子串开始的位置
  let backtracking = function(s, stackIndex) {
    if (stackIndex >= s.length) {
      const a = [...path];
      result.push(a);
      return;
    }

    for (let i = stackIndex; i < s.length; i++) {
       if (isPal(s,stackIndex, i)) {
        // 是回文串，截取子串添加到path
        let str = s.slice(stackIndex, i + 1);
        path.push(str);
       } else {
        continue;
       }
       backtracking(s, i + 1);
       path.pop();
    }
  }

  backtracking(s, 0);

  return result;
};