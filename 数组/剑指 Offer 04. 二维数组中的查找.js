/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
  if(matrix.length === 0) {
    return 0;
  }
  let n = matrix.length;
  let m = matrix[0].length;
  // 极限情况
  if(target < matrix[0][0] || target > matrix[n - 1][m - 1]) {
    return false;
  }
  let i = n - 1;
  let j = 0
  
  // 二叉搜索树上半部分
  while(i >= 0 && j < m) {
    if(matrix[i][j] > target) {
      i--;
    } else if(matrix[i][j] < target) {
      j++
    } else {
      return true;
    }
  }

  return false;
};