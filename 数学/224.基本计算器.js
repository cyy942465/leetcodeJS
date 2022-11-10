/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
  let numStack = []; // 数栈
  numStack.push(0); // 防止第一个数为负数
  let charStack = []; // 符号栈
  const len =s.length;
  let flag = false; // 表示上一个遍历的符号是不是数字
  let flag2 = false; // 表示上一个遍历的符号是不是左括号

  // 遍历字符串，转换为后缀表达式并计算
  for (let i = 0; i < len; i++) {
    const cur = s.charAt(i);
    if (cur === ' ') {
      flag = false;
      // 去除空格
      continue;
    } else if (cur === '+' || cur === '-') {
      flag = false;
      // 普通运算符
      if (charStack.length === 0) {
        charStack.push(cur);
        flag2 = false;
      } else {
        if (cur === '-' && flag2 === true) {
          numStack.push(0);
          flag2 = false;
        }
        while(charStack.length != 0) {
          const op = charStack.pop();
          // 遇到左括号
          if (op === '(') {
            charStack.push('(');
            // 负数的处理？
            break;
          }
          // 普通运算符直接算
          const b = numStack.pop();
          const a = numStack.pop();
          numStack.push(calculateNum(a,b,op));
          // console.log(numStack);
        }
        charStack.push(cur);
      }
    } else if (cur === '(') {
      flag = false;
      flag2 = true;
      // 直接入栈等待寻找匹配
      charStack.push(cur);
    } else if (cur === ')') {
      flag = false;
      flag2 = false;
      // 进行运算直到匹配左括号
      while(charStack.length != 0) {
        const op = charStack.pop();
        if (op === '(') {
          break;
        }
        // 进行运算
        const b = numStack.pop();
        const a = numStack.pop();
        numStack.push(calculateNum(a,b,op));
        // console.log(numStack);
      }
    } else { // 数字，多位数处理
      flag2 = false;
      if (flag === true) {
        const num = numStack.pop() * 10 + parseInt(cur);
        numStack.push(num); 
      } else {
        numStack.push(parseInt(cur));
      }
      flag = true;
    }
  }

  // 清空符号栈
  while(charStack.length != 0) {
    const op = charStack.pop();
    const b = numStack.pop();
    const a = numStack.pop();
    numStack.push(calculateNum(a,b,op));
    // console.log(numStack);
  }
  return numStack.pop();
};

function calculateNum(a,b,op) {
  // console.log(a, op , b);
  if (op === '+') {
    return a + b;
  } else if (op === '-') {
    return a - b;
  }
}
