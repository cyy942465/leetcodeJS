/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let total = m + n;

  // 判断奇偶数
  if (total % 2 === 1) {
    let midIndex = Math.floor(total / 2) + 1;
    return getKthNumber(nums1, nums2, midIndex);
  } else {
    let midIndex_1 = Math.floor(total / 2);
    let midIndex_2 = Math.floor(total / 2) + 1;
    return (getKthNumber(nums1, nums2, midIndex_1) + getKthNumber(nums1, nums2, midIndex_2)) / 2;
  }
};

// 找到两个数组中第k小的数
function getKthNumber(nums1, nums2, k) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let index1 = 0;
  let index2 = 0;

  while (true) {
    // 判断边界条件
    if (index1 === len1) {
      return nums2[index2 + k - 1];
    }
    if (index2 === len2) {
      return nums1[index1 + k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[index1], nums2[index2]);
    }

    // 一般情况下
    let half = Math.floor(k / 2);
    let newIndex1 = Math.min(index1 + half, len1) - 1;
    let newIndex2 = Math.min(index2 + half, len2) - 1;
    if (nums1[newIndex1] <= nums2[newIndex2]) {
      k -= newIndex1 - index1 + 1;
      index1 = newIndex1 + 1;
    } else {
      k -= newIndex2 - index2 + 1;
      index2 = newIndex2 + 1;
    }
  }
}