/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  let numSet = new Set();
  let result = null;
  for(num of nums) {
    if(numSet.has(num)){
      result = num;
      break;
    } else {
      numSet.add(num);
    }
  }
  return result;
};

