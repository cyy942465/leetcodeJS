/*
 * @Author: cyy
 * @Date: 2023-02-08 16:08:01
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-08 16:15:54
 * @Description: default
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
    let result = false;
    let path = [];

    let backtracking = function(root, path) {
        if (root === null) {
            return;
        }

        if (root.left === null && root.right === null) {
            const len = path.length;
            let sum = 0;
            for (let i = 0; i < len; i++) {
                const cur = path[i];
                sum += cur;
            }
            sum += root.val;
            if (sum === targetSum) {
                result = true;
            }
        }

        path.push(root.val);
        backtracking(root.left, path);
        backtracking(root.right, path);
        path.pop();
    }

    backtracking(root, path);
    return result;
};