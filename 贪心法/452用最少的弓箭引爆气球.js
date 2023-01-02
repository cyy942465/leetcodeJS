/*
 * @Author: cyy
 * @Date: 2023-01-02 15:44:05
 * @LastEditors: cyy
 * @LastEditTime: 2023-01-02 16:09:19
 * @Description: default
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    // 对数组进行排序，寻找重叠区间
    points.sort(compare);
    // console.log(points);
    let result = 1; // 所需弓箭的个数
    let areaRight = points[0][1]; // 重叠区间取最右侧最小值

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > areaRight) {
            result ++;
            areaRight = points[i][1];
        } else if (points[i][1] < areaRight) {
            areaRight = points[i][1];
        }
    }

    return result;
};

let compare = function(a , b) {
    return a[0] - b[0];
}