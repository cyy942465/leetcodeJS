/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
 var multiply = function(A, B) {
  if (A === 0 || B === 0) {
    return 0;
  }
  
  const tempMin = Math.min(A,B); // 递增的次数
  const tempMax = Math.max(A,B); // 递增的值

  if (tempMin === 1) {
    return tempMax;
  }

  return tempMax + multiply(tempMin - 1, tempMax);
};