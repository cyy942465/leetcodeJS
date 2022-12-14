/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 10:48:52
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 10:50:17
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
var inorderTraversal = function(root) {
  let result = [];
  travel(root, result);
  return result;
};

var travel = function(root, result) {
  if (root === null) {
    return;
  }
  travel(root.left, result);
  result.push(root.val);
  travel(root.right, result);
}