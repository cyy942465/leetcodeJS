/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
  let charStack = []; // 数栈
  let numStack = []; // 符号栈
  let n = s.length;
  let num = 0;
  let char = '';
  
  for (let i = 0 ; i < n; i++) {
    if ( Number(s[i]) >= 0) {
      // 处理数字
      num = num * 10 + parseInt(s[i]);
    } else if (s[i] === '[') {
      // 数字和符号都入栈
      numStack.push(num);
      charStack.push(char);
      num = 0;
      char = '';
    } else if (s[i] === ']') {
      chTemp = charStack.pop();
      numTemp = numStack.pop();
      for (let j = 0; j < numTemp; j++) {
        chTemp += char;
      }
      char = chTemp;
    } else {
      // 处理字符
      char += s[i];
    }
  }

  return char;
};
