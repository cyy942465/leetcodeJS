/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let res = [];
  let i = 0;
  let j = 0;
  //双指针遍历两个数组
  while(i < m && j < n) {
    if(nums1[i] <= nums2[j]) {
      res.push(nums1[i]);
      i += 1;
    } else {
      res.push(nums2[j]);
      j += 1;
    }
  }
  //处理未遍历完的数组
  while(i < m) {
    res.push(nums1[i++]);
  }
  while(j < n) {
    res.push(nums2[j++]);
  }
  //将nums1指向中间数组
  for(let k = 0 ; k < m + n; k++) {
    nums1[k] = res[k];
  }
};
