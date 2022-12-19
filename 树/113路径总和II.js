/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-18 21:15:29
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-18 21:20:49
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    let path = [];
    if (root === null) {
        return result;
    }

    let travel = function(node, targetSum, path) {
        if (node.left === null && node.right === null && targetSum - node.val === 0) {
            let cur = [...path];
            cur.push(node.val);
            result.push(cur);
            return;
        }
        if (node.left === null && node.right === null) {
            return;
        }

        if (node.left !== null) {
            targetSum -= node.val;
            path.push(node.val);
            travel(node.left, targetSum, path);
            path.pop();
            targetSum += node.val;
        }

        if (node.right !== null) {
            targetSum -= node.val;
            path.push(node.val);
            travel(node.right, targetSum, path);
            path.pop();
            targetSum += node.val;
        } 

        return;
    }

    travel(root, targetSum, path);

    return result;
};