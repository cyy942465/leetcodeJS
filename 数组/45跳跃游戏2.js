/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let dirt = 0; // 当前能到达的最远处
  let count = 0; // 已走的步数
  let i = 0; // 数组的索引

  // 遍历数组,每次寻找段内的最远点
  while(dirt < nums.length - 1) {
    const l = dirt;
    // 寻找这一段能到达的最远dirt
    for(i; i <= l; i++) {
      if(i + nums[i] > dirt) {
        dirt = i + nums[i];
      }
    }
    count ++;
    if(dirt >= nums.length - 1) {
      return count;
    }
  }

  return count;
};