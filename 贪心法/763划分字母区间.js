/*
 * @Author: cyy
 * @Date: 2023-01-02 16:15:08
 * @LastEditors: cyy
 * @LastEditTime: 2023-01-02 16:59:27
 * @Description: default
 */
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let map = new Map();
    // 从后往前遍历字符串,获取每个字母最后出现的位置
    for (let i = s.length - 1; i >= 0; i--) {
        if (map.has(s.charAt(i))) {
            continue;
        } else {
            map.set(s.charAt(i), i);
        }
    }

    // 从前遍历数组进行划分
    let result = [];
    let last = -1; // 上一个字符串划分最后一个元素序号
    for (let i = 0; i < s.length; i++) {
        // console.log(i);
        let cur = map.get(s.charAt(i));
        // console.log(cur);
        // 遍历cur里面的所有字母
        for (let j = i; j <= cur; j++) {
            const ch = s.charAt(j);
            if (map.get(ch) <= cur) {
                continue;
            } else {
                cur = map.get(ch);
            }
        }
        // 更新last和i的值,并保存结果
        result.push(cur - last);
        last = cur;
        i = cur;
    }

    return result;
};


