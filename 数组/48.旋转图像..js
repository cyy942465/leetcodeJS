/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  // 遍历矩阵,i为行，j为列
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i + 1 ; j < matrix.length; j++) {
      // j为要换的行和列
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // 遍历矩阵反转数组
  matrix.forEach(function(value,index) {
    value.reverse();
  })
};