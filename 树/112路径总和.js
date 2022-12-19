/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-18 20:56:04
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-18 21:15:41
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {   
    if (root === null) {
        return false;
    }
    return travel(root, targetSum);
};

let travel = function(node, targetSum) {
    if (node.left === null && node.right === null && targetSum - node.val === 0) {
        return true;
    }
    if (node.left === null && node.right === null) {
        return false;
    }

    if (node.left !== null) {
        targetSum -= node.val;
        if (travel(node.left, targetSum)) {
            return true;
        }
        targetSum += node.val;
    }

    if (node.right !== null) {
        targetSum -= node.val;
        if (travel(node.right, targetSum)) {
            return true;
        }
        targetSum += node.val;
    }

    return false;
}