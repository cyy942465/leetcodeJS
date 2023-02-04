/*
 * @Author: cyy
 * @Date: 2023-02-03 15:24:57
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-03 15:33:02
 * @Description: default
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort(compare);
    const len = intervals.length;
    if (len <= 1) {
        return intervals;
    }

    let left = intervals[0][0];
    let right = intervals[0][1];
    let result = [];

    for (let i = 1; i < len; i++) {
        if (intervals[i][0] > right) {
            result.push([left, right]);
            left = intervals[i][0];
            right = intervals[i][1];
        } else {
            left = Math.min(left, intervals[i][0]);
            right = Math.max(right, intervals[i][1]);
        }
    }
    result.push([left,right]);

    return result;
};

function compare(a,b) {
    return a[0] - b[0];
}