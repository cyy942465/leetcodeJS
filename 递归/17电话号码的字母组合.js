/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  
};

let getCharacter = function(a) {
  if (a === '2') {
    return ['a', 'b', 'c'];
  } else if (a === '3') {
    return ['d', 'e', 'f'];
  } else if (a === '4') {
    return ['g', 'h', 'i'];
  } else if (a === '5') {
    return ['j', 'k', 'l'];
  } else if (a === '6') {
    return ['m', 'n', 'o'];
  } else if (a === '7') {
    return ['p', 'q', 'r', 's'];
  } else if (a === '8') {
    return ['t', 'u', 'v'];
  } else if (a === '9') {
    return ['w', 'x', 'y', 'z'];
  } else {
    return [];
  }
}