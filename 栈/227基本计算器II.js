/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
  s.trim(); // 去除空格
  let preSign = '+';
  let stack = [];
  let num = 0;
  const n = s.length;

  // 遍历字符串
  for (let i = 0; i < n; i++) {
    if (!isNaN(Number(s[i])) && s[i] !== ' ') {
      num = num * 10 + parseInt(s[i]);
    }
    if (isNaN(Number(s[i])) || i === n - 1) {
      if (preSign === '+') {
        stack.push(num);
      } else if (preSign === '-') {
        stack.push(-num);
      } else if (preSign === '*') {
        stack.push(stack.pop() * num);
      } else {
        stack.push(stack.pop() / num | 0);
      }
      preSign = s[i];
      num = 0;
    }
  }

  // 遍历栈进行运算
  let result = 0;
  while(stack.length) {
    result += stack.pop();
  }

  return result;
};