/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // 从后往前找拐点
    if (nums.length <= 1) {
        return;
    }

    let j = nums.length - 1;
    let i = nums.length - 2;
    let k = nums.length - 1;

    while (i >= 0 && nums[i] >= nums[j]) {
        i --;
        j --;
    }

    // 判断是否为最后一个排列，在后半段区间内找第一个比nums[i]大的数
    if (i >= 0) {
        while(nums[i] >= nums[k]) {
            k--;
        }
        // 交换i和k
        let a = nums[i];
        nums[i] = nums[k];
        nums[k] = a;
    }

    // 逆置j到end
    for (i = j, j = nums.length - 1; i < j; i++, j--) {
        let b = nums[i];
        nums[i] = nums[j];
        nums[j] = b;
    }

    return;
};