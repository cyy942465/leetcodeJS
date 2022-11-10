/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let set1 = new Set;
    let set2 = new Set;
    let result = [];
    
    // 分别遍历两个数组
    for (let num of nums1) {
      if (!set1.has(num)) {
        set1.add(num);
      }
    }

    // 遍历第二个数组
    for (let num of nums2) {
      if (set1.has(num) && !set2.has(num)) {
        result.push(num);
        set2.add(num);
      }
    }

    return result;
};