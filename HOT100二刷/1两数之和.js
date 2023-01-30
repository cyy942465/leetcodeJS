/*
 * @Author: cyy
 * @Date: 2023-01-30 16:43:02
 * @LastEditors: cyy
 * @LastEditTime: 2023-01-30 16:46:15
 * @Description: default
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(); // 哈希映射表
    let result = [];
    nums.forEach((value, index) => {
        if (map.has(target - value)) {
            result.push(index);
            result.push(map.get(target - value));
        } else {
            map.set(value, index);
        }
    });

    return result;
};