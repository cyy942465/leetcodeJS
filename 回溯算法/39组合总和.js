/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  let path = [];

  let backtracking = function(candidates, target, sum, stackIndex) {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      const a = [...path];
      result.push(a);
      return;
    }

    for (let i = stackIndex; i < candidates.length; i++) {
      sum += candidates[i];
      path.push(candidates[i]);
      backtracking(candidates, target, sum, i);
      sum -= candidates[i];
      path.pop();
    }
  }

  backtracking(candidates, target, 0, 0);

  return result;
};