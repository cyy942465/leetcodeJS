/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */


var combine = function(n, k) {
  const result = []; // 存放符合条件的组合的集合
  let path = []; // 存放符合条件的结果
  let backtracking = function(n, k, stackIndex) {
    if (path.length === k) {
      const a = [...path]; // 硬拷贝
      result.push(a);
      return;
    }
    
    for (let i = stackIndex; i <= n; i++) {
      path.push(i);
      backtracking(n, k, i + 1); // 递归
      path.pop(); // 回溯
    }
  }

  backtracking(n, k, 1);
  return result;
};