/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
  let str = path.split('/');
  let stack = []; // 用于存储最终目录的结构
  for (let sign of str) {
    if (sign === '' || sign === '.') {
      continue;
    }
    if (sign === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(sign);
    }
  }

  if (stack.length === 0) {
    return '/';
  }

  let result = '';
  for (let file of stack) {
    result = result + '/' + file;
  }

  return result;
};