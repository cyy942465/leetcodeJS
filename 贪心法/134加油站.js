/*
 * @Author: cyy
 * @LastEditors: cyy
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let curSum = 0; // 记录以start为起始位置是否能走完一圈
    let totalSum = 0; // 用于判断是否存在路径
    let start = 0; // 用于存放起始位置

    for (let i = 0; i < gas.length; i++) {
        curSum += gas[i] - cost[i];
        totalSum += gas[i] - cost[i];

        if (curSum < 0) {
            curSum = 0;
            start = i + 1;
        }
    }

    if (totalSum < 0) {
        return -1;
    }

    return start;
};