/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSort(0, nums.length - 1, nums);
    return nums;
};

function partition(start, end, nums) {
    let left = start;
    let right = end;
    const base = nums[left];

    while (left !== right) {
        while (nums[right] >= base && right > left) {
            right--;
        }

        nums[left] = nums[right];

        while (nums[left] <= base && left < right) {
            left++;
        }

        nums[right] = nums[left];
    }

    nums[left] = base;

    return left;
}

function quickSort(start, end, nums) {
    if (start < end) {
        let mid = partition(start, end, nums);
        quickSort(start, mid - 1, nums);
        quickSort(mid + 1, end, nums);
    }
}