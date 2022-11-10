/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let m = new Map();
  let result = new Array();
  //构建映射表
  nums.forEach((value,index) => {
    if(m.has(target - value)) {//找到值直接返回
      result.push(m.get(target - value));
      result.push(index);
      return result;
    }
    //没找到记录
    m.set(value,index);
  })

  return result;
};

let nums = [2,7,11,15];

let a = twoSum(nums,9);
console.log(a);