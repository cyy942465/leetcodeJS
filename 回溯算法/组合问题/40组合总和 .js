/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  let result = [];
  let path = [];

  let backtracking = function(candidates, target, sum, stackIndex, used) {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      const a = [...path];
      result.push(a);
      return;
    }

    for (let i = stackIndex; i < candidates.length; i++) {
      if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
        continue;
      }
      sum += candidates[i];
      path.push(candidates[i]);
      used[i] = true;
      backtracking(candidates, target, sum, i + 1, used);
      used[i] = false;
      sum -= candidates[i];
      path.pop();
    }
  }

  candidates.sort(); //  排序让相同的元素相邻
  let used = new Array(candidates.length).fill(false);
  console.log(used);

  backtracking(candidates, target, 0, 0, used);

  return result;
};