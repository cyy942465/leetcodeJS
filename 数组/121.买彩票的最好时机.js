/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let max = 0;//到目前为止能赚的最大利润
  let min = prices[0];//到目前为止的最低价
  //遍历数组
  prices.forEach((value,index) => {
    if(value <= min) {
      min = value;
    } else {
      let profit = value - min;
      if(profit > max) {
        max = profit;
      }
    }
  })

  return max;
};