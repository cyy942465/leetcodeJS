/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-19 17:03:50
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-19 17:07:59
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    while (root !== null) {
        if (val === root.val) {
            return root;
        } else if (val > root.val) {
            root = root.right;
        } else {
            root = root.left;
        }
    }

    return null;
};