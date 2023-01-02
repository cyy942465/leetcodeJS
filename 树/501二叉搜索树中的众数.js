/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-21 20:56:15
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-21 21:03:54
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
 * @return {number[]}
 */
var findMode = function(root) {
    let maxTimes = 0;
    let result = [];
    let travel = function(node, curTimes, pre) {
        if (node === null) {
            return null;
        }
        travel(node.left, curTimes, pre);
        if (pre.val === node.val) {
            curTimes++;
            if (curTimes > maxTimes) {
                maxTimes = curTimes;
                result = node.val;
            }
        }
        pre = node;
        travel(node.right, curTimes, pre);
    }

    travel(root);

    return result;
};