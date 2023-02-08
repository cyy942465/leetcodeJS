/*
 * @Author: cyy
 * @Date: 2023-02-04 17:43:47
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-04 20:29:53
 * @Description: default
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len = m + n - 1;
    // 从后往前比较
    let i = m - 1;
    let j = n - 1;

    while (j >= 0 && i >= 0) {
        if (nums2[j] > nums1[i]) {
            nums1[len--] = nums2[j];
            j--;
        } else {
            nums1[len--] = nums1[i];
            i--;
        }
    }

    while (j >= 0) {
        nums1[len--] = nums2[j--];
    }

    while (i >= 0) {
        nums1[len--] = nums1[i--];
    }

    return nums1;
};