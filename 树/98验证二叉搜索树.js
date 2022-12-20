/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-19 17:10:22
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-19 20:34:07
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) {
        return true;
    }
    if (root.left === null && root.right === null) {
        return true;
    }
    
    

};