/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  // 判断极端情况
  if ( x < 0 || x != 0 && x % 10 === 0) {
    return false;
  }

  // 正常情况判断
  // 反转数字,只反转一半
  let reserveNumber = 0;
  while(x > reserveNumber) {
    reserveNumber = reserveNumber * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  // 注意奇数的情况
  return reserveNumber === x || x === Math.floor(reserveNumber / 10);
};