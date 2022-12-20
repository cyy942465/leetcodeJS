/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-19 16:38:46
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-19 16:45:34
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    return initTree(nums);
};

let initTree = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    // 寻找根节点的值和下标
    let max = -Infinity;
    let maxIndex = -1;
    nums.forEach((value, index)=> {
        if (value > max) {
            max = value;
            maxIndex = index;
        }
    })

    // 构造根节点
    let root = new TreeNode(max, null, null);

    // 分割数组
    let leftNums = nums.slice(0, maxIndex);
    let rightNums = nums.slice(maxIndex + 1);


    root.left = initTree(leftNums);
    root.right = initTree(rightNums);

    return root;
}