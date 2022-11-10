/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function(nums) {
  // 找出最大的三个数和最小的两个数
  let min1 = Infinity;
  let min2 = Number.MAX_SAFE_INTEGER;
  let max1 = -Number.MAX_SAFE_INTEGER;
  let max2 = -Number.MAX_SAFE_INTEGER;
  let max3 = -Number.MAX_SAFE_INTEGER;

  // 遍历数组
  nums.forEach(value => {
    if(value < min1) {
      min1 = value;
    } else if(value < min2) {
      min2 = value;
    }

    if(value > max1) {
      max3 = max2;
      max2 = max1;
      max1 = value;
    } else if(value > max2) {
      max3 = max2;
      max2 = value;
    } else if(value > max3) {
      max3 = value;
    }
  })

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};