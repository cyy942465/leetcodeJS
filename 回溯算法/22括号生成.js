/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-11-17 10:32:48
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-11-17 11:10:22
 */
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  let result = [];
  let path = [];

  let backtracking = function(ln,rn) {
    if (path.length === n * 2) {
      const a = path.join('');
      result.push(a);
      return;
    }

    if (ln < n) {
      path.push('(');
      backtracking(ln + 1, rn);
      path.pop();
    }

    if (rn < ln) {
      path.push(')');
      backtracking(ln, rn + 1);
      path.pop();
    }
  }

  backtracking(0, 0);

  return result;
};