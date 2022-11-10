/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
  let stack = []; // 使用栈来控制最终的结果

  // 遍历字符串
  for (let char of s) {
    if (stack.length === 0) {
      stack.push(char);
    } else {
      const ch = stack.pop()
      // 弹出栈内所有相邻重复项
      if (ch === char) {
        continue;
      }
      stack.push(ch);
      stack.push(char);
    }
  }

  let result = '';
  for (char of stack) {
    result += char;
  }

  return result;
};