/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort(compare);
    let count = 1;
    if (points.length <= 1) {
        return 1;
    }

    let left = points[0][0];
    let right = points[0][1];

    for (let i = 0; i < points.length; i++) {
        const cur = points[i];
        if (cur[0] > right) {
            left = cur[0];
            right = cur[1];
            count++;
        } else {
            left = Math.max(left, cur[0]);
            right = Math.min(right, cur[1]);
        }
    }
    

    return count;
};

function compare(a, b) {
    return a[0] - b[0];
}