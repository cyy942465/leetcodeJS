/**
 * @param {number[]} bits
 * @return {boolean}
 */
 var isOneBitCharacter = function(bits) {
  // 用栈来记录遍历
  let stack = [];

  // 遍历到数组倒数第二位
  for(let i = 0 ; i < bits.length - 1; i++) {
    // 栈为空，直接入栈
    if(stack.length === 0) {
      stack.push(bits[i]);
      continue;
    }

    // 栈不为空，进行判断
    if(bits[i] === 0) {
      // 当前数字为0
      if(stack[0] === 1) {
        stack.pop();
      } else {
        continue;
      }
    } else {
      // 当前数字为1
      if(stack[0] === 1) {
        stack.pop();
      } else {
        stack.pop();
        stack.push(bits[i]);
      }
    }
  }


  if(stack.length === 0) {
    return true;
  } else if (stack[0] === 0) {
    return true;
  } else {
    return false;
  }

};