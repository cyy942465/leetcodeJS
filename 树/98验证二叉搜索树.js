/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-19 17:10:22
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-21 20:44:00
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
    // 获取中序遍历数组
    // 判断中序遍历数组是否为升序数组
    for(let i = 1; i < inOrder.length; i++) {
        if (inOrder[i - 1] >= inOrder[i]) {
            return false;
        }
    }

    return true;
};

