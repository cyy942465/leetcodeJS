/*
 * @Author: CYY
 * @Date: 2022-10-27 17:40:48
 * @LastEditors: CYY
 * @LastEditTime: 2022-10-31 20:28:12
 * @FilePath: \二分查找\240搜索二维矩阵II.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let x = 0, y = n - 1; 
  while (x < m && y >= 0) { 
      if (matrix[x][y] === target) {
          return true;
      }
      if (matrix[x][y] > target) {
          --y;
      } else {
          ++x;
      }
  }
  return false;
};