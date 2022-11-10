/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
  let change5 = 0;
  let change10 = 0;

  // 遍历bills数组
  for (cur of bills) {
    // 5块钱直接收下
    if (cur === 5) {
      change5++;
    } else if (cur === 10) {
      if (change5 === 0) {
        return false;
      }
      change5--;
      change10++;
    } else {
      if (change10 > 0 && change5 > 0) {
        change10--;
        change5--;
      } else if (change10 === 0 && change5 >= 3) {
        change5 -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};