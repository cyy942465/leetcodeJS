/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    let a = -Infinity; // 第一大数
    let b = -Infinity; // 第二大数
    let c = -Infinity; // 第三大数

    nums.forEach(value => {
        if (value > a) {
            c = b;
            b = a;
            a = value;
        } else if (value < a && value > b) {
            c = b;
            b = value;
        } else if (value < b && value > c) {
            c = value;
        }
    })

    return c === -Infinity ? a : c;
};