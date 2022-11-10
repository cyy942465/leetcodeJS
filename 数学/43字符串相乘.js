/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
  // 极端情况
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  const len1 = num1.length;
  const len2 = num2.length;
  // 乘积的长度等于len1 + len2 或者 len1 + len2 - 1
  let result = new Array(len1 + len2).fill(0);

  // 竖式计算优化版
  for (let i = len1 - 1; i >= 0; i--) {
    const x = num1.charAt(i) - '0';
    for (let j = len2 - 1; j >= 0; j--) {
      const y = num2.charAt(j) - '0';
      result[i + j + 1] += x * y;
    }
  }

  // 进位
  for (let i = len1 + len2 - 1; i > 0; i--) {
    result[i - 1] += Math.floor(result[i] / 10);
    result[i] %= 10;
  }
  // 字符串转换
  let resString = '';
  let index = (result[0] === 0) ? 1 : 0;
  for (index; index < len1 + len2; index++) {
    resString += result[index];
  }

  return resString;
};