/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  // 26进制
  let len = columnTitle.length;
  let result = 0;
  // 遍历序列,j为次数
  for (let i = len - 1, j = 0; i >= 0; i--, j++) {
    result += (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1) * Math.pow(26,j);
  }

  return result;
};