/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 10:58:25
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 11:01:56
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
 var preorderTraversal = function(root) {
  let stack = [];
  let result = [];

  if (root === null) {
    return result;
  }
  stack.push(root);
  while(stack.length > 0) {
    let node = stack.pop();
    result.push(node.val);
    // 先压入右节点，后压入左节点
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return result;
};