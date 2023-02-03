/*
 * @Author: cyy
 * @Date: 2023-02-02 22:14:07
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-02 22:19:25
 * @Description: default
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0]; // 当前为止的最低价
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= min) {
            min = prices[i];
        } else {
            let earn = prices[i] - min; // 当前价格卖出能得到的最大利润
            if (earn > max) {
                max = earn;
            }
        }
    }

    return max;

};