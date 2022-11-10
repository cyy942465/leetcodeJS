/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let len = s.length;
  let result = getValue(s.charAt(0));
  let pre = result;

  for (let i = 1 ; i < len; i++) {
    const cur = getValue(s.charAt(i));
    if (pre < cur) {
      result += cur -2 * pre;
    } else {
      result += cur;
    }
    pre = cur;
  }

  return result;
};

function getValue(ch) {
  switch (ch) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return 0;
  }
}

console.log(romanToInt("MCMXCIV"));