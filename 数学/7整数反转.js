/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let result = 0;
  while(x != 0) {
    const temp = x % 10;
    if (result > 2147483647 || result < -2147483648) {
      return 0;
    }
    result = result * 10 + temp;
    x = x < 0? Math.ceil(x / 10) : Math.floor(x / 10);
  }

  return result;
};