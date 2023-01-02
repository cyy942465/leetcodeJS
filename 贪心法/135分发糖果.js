/*
 * @Author: cyy
 * @Date: 2023-01-02 15:14:00
 * @LastEditors: cyy
 * @LastEditDate: 2023-01-02 15:14:00
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const len = ratings.length;
    let candies = new Array(len);
    candies.fill(1);
    // 从前往后遍历，右边大于左边
    for (let i = 0; i < len - 1; i++) {
        if (ratings[i + 1] > ratings[i]) {
            candies[i + 1] = candies[i] + 1; 
        }
    }

    // 从右往前遍历,左边大于右边
    for (let i = len - 1; i > 0; i--) {
        if (ratings[i - 1] > ratings[i]) {
            candies[i - 1] = Math.max(candies[i - 1], candies[i] + 1); // 保证右边大于左边的条件满足
        }
    }

    let result = 0;

    candies.forEach( (value) => {
        result += value;
    })

    return result;
};