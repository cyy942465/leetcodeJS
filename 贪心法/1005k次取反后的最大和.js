/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    // 从小到大排序
    nums.sort(compare);
    console.log(nums);
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] *= -1;
            k--;
        }
    }
    if (k % 2 === 1) {
        nums[nums.length - 1] *= -1;
    }
    nums.forEach(value => {
        result += value;
    })

    return result;
};

function compare(a, b) {
    return Math.abs(b) - Math.abs(a);
}