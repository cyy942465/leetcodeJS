/*
 * @Author: cyy
 * @Date: 2023-02-01 16:45:45
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-01 17:11:31
 * @Description: default
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const n = nums.length;

    const quick = (l, r) => {
        if (l > r) {
            return; // 递归终止条件
        }
        let random = Math.floor(Math.random() * (r - l + 1)) + l; //随机选取一个索引
        swap(nums, random, r); //将它和位置r的元素交换，让nums[r]作为基准元素

        let partitionIndex = partition(nums, l, r);
        if (n - k < partitionIndex) {
            quick(l, partitionIndex - 1);
        } else {
            quick(partitionIndex + 1, r);
        }
    };

    quick(0, n - 1);
    return nums[n - k];
};

function partition(nums, left, right) {
    let pivot = nums[right];
    let pivotIndex = left;
    for (let i = left; i < right; i++) {
        if (nums[i] < pivot) { // 当前元素比基准元素小，将它一到最左边
            swap(nums, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(nums, pivotIndex, right); // 获得基准的最终位置
    return pivotIndex; // 返回基准的最终位置
}

function swap(nums, p, q) {
    const temp = nums[p];
    nums[p] = nums[q];
    nums[q] = temp;
}