/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-17 14:09:28
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-17 14:20:25
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
var sumOfLeftLeaves = function(root) {
    // 前序遍历
    let stack = [];
    if (root === null) {
      return 0;
    }
    let result = 0;
    stack.push(root);
    while (stack.length > 0) {
      let node = stack.pop();
      // 判断是否是左叶子
      if (node.left !== null && node.left.left === null && node.left.right === null) {
        result += node.left.val;
      }
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }

    return result;
};