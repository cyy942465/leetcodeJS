/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let index = m + n - 1;
  //从后往前遍历
  while(i > -1 && j > -1) {
    if(nums1[i] >= nums2[j]) {
      nums1[index--] = nums1[i--];
    } else {
      nums1[index--] = nums2[j--];
    }
  }
  //处理未遍历完的数组
  while(i > -1) {
    nums1[index--] = nums1[i--];
  }
  while(j > -1) {
    nums1[index--] = nums2[j--];
  }

};