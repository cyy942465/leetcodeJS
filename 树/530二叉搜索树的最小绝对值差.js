/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-21 20:47:07
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-21 20:53:36
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
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let inOrder = [];
    let travel = function(node) {
        if (node === null) {
            return null;
        }
        travel(node.left);
        inOrder.push(node.val);
        travel(node.right);
    }

    travel(root);
    let min = Infinity;
    if (inOrder.length < 2) {
        return 0;
    }
    for (let i = 1; i < inOrder.length; i ++) {
        if (inOrder[i] - inOrder[i - 1] < min) {
            min = inOrder[i] - inOrder[i - 1];
        }
    }

    return min;
};