/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 11:11:43
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 11:20:05
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
var postorderTraversal = function(root) {
    let stack = [];
    let result = [];
    if (root === null) {
      return result;
    }

    stack.push(root);
    while (stack.length > 1) {
      let node = stack.pop();
      result.push(node.val);
      if (node.left !== null) {
        stack.push(node.left);
      }
      if (node.right !== null) {
        stack.push(node.right);
      }
    }

    return result.reverse();
};