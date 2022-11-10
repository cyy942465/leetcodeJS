/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []; //存放结果的数组
    if (nums.length < 3 || nums == null) {
        return result;
    }
    //对数组进行排序
    nums.sort((a, b) => {
        return a - b;
    })
    //极端情况排除
    if (nums[0] > 0 || nums[nums.length - 1] < 0) {
        return result;
    }
    //遍历数组,每次寻找时固定左边
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        //去重
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let p = i + 1;
        let r = nums.length - 1;
        //固定左边，开始遍历
        while (p < r) {
            let sum = nums[i] + nums[p] + nums[r];
            if(sum < 0) {
                p++;
            } else if(sum > 0) {
                r--;
            } else if(sum == 0) {
                result.push([nums[i],nums[p],nums[r]]);
                //去重
                while(p < r && nums[p] == nums[p + 1]) {
                    p++;
                }
                while(p < r && nums[r] == nums[r - 1]) {
                    r--;
                }
                p++;
                r--;
            }
        }       
    }
    return result;
};