/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let pre = 0;//用于记录前面几项最大的连续子数组和
  let result = 0;//记录最大的值
  //遍历数组
  nums.forEach((value,index) => {
    //第一项
    if(index === 0) {
      pre = value;
      result = value;
    }
    //第二项之后
    else {
      if(value >= pre + value) {
        pre = value
        if(value > result) {
          result = value;
        }
      } else {
        pre = pre + value;
        if(pre > result) {
          result = pre;
        }
      }
    }
  })
  return result;
};

let nums = [5,4,-1,7,8];
console.log(maxSubArray(nums));