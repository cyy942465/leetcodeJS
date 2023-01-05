/*
 * @Author: cyy
 * @Date: 2023-01-02 21:14:37
 * @LastEditors: cyy
 * @LastEditTime: 2023-01-02 21:40:07
 * @Description: default
 */
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    // 从后往前遍历数字
    let result = [];
    let last = n % 10;
    n = Math.floor(n / 10);
    result.push(last);

    while (n !== 0) {
        let max = result.pop();
        last = n % 10;
        // console.log(last);
        n = Math.floor(n / 10);
        if (max < last) {
            last -= 1;
            // 之前全部为9
            max = 9;
            for (let i = 0; i < result.length; i++) {
                result[i] = 9;
            }
        }
        result.push(max);
        result.push(last);
    }
    // console.log(result);

    // 遍历result
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i] * Math.pow(10, i);
    }

    return sum;
};