/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
  // nums[i] + ... + nums[j] = pre[j] - pre[i - 1];
  let map = new Map();

  // 边界条件
  map.set(0 , 1);
  
  let count = 0;
  let pre = 0;

  // 遍历数组求前缀和
  for (const value of nums) {
    pre += value;
    if (map.has(pre - k)) {
      count += map.get(pre - k);
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }

  return count;

};