/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
  if (k === num.length) {
    return '0';
  }
  
  // 单调栈
  const stack = [];
  for (let cur of num) {
    while( stack.length && stack[stack.length - 1] > cur && k) {
      stack.pop();
      k -= 1;
    }
    stack.push(cur);
  }
  
  // 如果k不为0
  while (k) {
    stack.pop();
    k--;
  }

  // 构造最终的答案
  let ans = '';
  let isZero = true; // 是否以0开头
  for (let cur of stack) {
    if (isZero && cur === '0') {
      continue;
    }
    isZero = false;
    ans += cur;
  }

  return ans === '' ? '0' : ans;
};