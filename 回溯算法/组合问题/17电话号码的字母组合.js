/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  // 存储数字映射表
  const numMap = [
    '', // 0
    '', // 1
    'abc', // 2
    'def', // 3
    'ghi', // 4
    'jkl', // 5
    'mno', // 6
    'pqrs', // 7
    'tuv', // 8
    'wxyz', // 9
  ]

  let result = [];
  let path = [];

  let backtracking = function(digits, stackIndex) {
    if (digits === "") {
      return [];
    }
    if (stackIndex === digits.length) {
      let tempStr = '';
      for(let s of path) {
        tempStr += s;
      }
      result.push(tempStr);
      return;
    }

    let digit = digits.charAt(stackIndex) - '0';
    console.log(digit);
    let str = numMap[digit];

    for (let i = 0 ; i < str.length; i++) {
      const ch = str.charAt(i);
      path.push(ch);
      backtracking(digits, stackIndex + 1);
      path.pop();
    }
  }

  backtracking(digits, 0);
  return result;
};