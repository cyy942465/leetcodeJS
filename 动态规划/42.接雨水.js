/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  let max_l = new Array(height.length).fill(0); // 第i列左边最高的墙
  let max_r = new Array(height.length).fill(0); // 第i列右边最高的墙

  // 动态规划构造两个数组
  for (let i = 1; i < height.length; i++) {
    max_l[i] = Math.max(max_l[i - 1], height[i - 1]);
  }

  for (let i = height.length - 2; i >= 0; i--) {
    max_r[i] = Math.max(max_r[i + 1], height[i + 1]);
  }

  // 遍历height求结果
  let result = 0;
  for (let i = 0; i < height.length; i++) {
    const min = Math.min(max_l[i],max_r[i]);
    if (min > height[i]) {
      result += min - height[i];
    }
  }

  return result;
};