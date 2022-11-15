/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
  let result = []; // 存放结果的集合
  let path = []; // 存放一个结果
  
  /**
   * @description: 回溯函数
   * @param {*} target 需要求取的目标值
   * @param {*} k 组合的数字个数
   * @param {*} sum 已经获取的和
   * @param {*} stackIndex 递归的层数
   * @return {*}
   */
  let backtracking = function(target, k, sum, stackIndex) {
    if (sum > target) {
      return;
    }
    if (path.length === k) {
      if (sum === target) {
        const a = [...path];
        result.push(a);
      }

      return;
    }

    for (let i = stackIndex; i <= 9; i++) {
      sum += i;
      path.push(i);
      backtracking(target, k, sum, i + 1);
      sum -= i;
      path.pop(i);
    }
  }

  backtracking(n, k, 0, 1);

  return result;
};