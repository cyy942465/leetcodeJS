/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    let path = [];
    result.push([]);

    let backtracking = function(nums, stackIndex) {
        if (stackIndex >= nums.length) {
            return;
        }

        for (let i = stackIndex; i < nums.length; i++) {
            path.push(nums[i]);
            const a = [...path];
            result.push(a);
            backtracking(nums, i + 1);
            path.pop();
        }
    }

    backtracking(nums, 0);

    return result;
};