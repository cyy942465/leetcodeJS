/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-15 16:27:46
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-15 16:43:08
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
var countNodes = function(root) {
    return getCount(root);
};

let getCount = function(node) {
  if (node === null) {
    return 0;
  }
  let left = node.left;
  let right = node.right;
  let leftDepth = 1;
  let rightDepth = 1;

  while(left !== null) {
    left = left.left;
    leftDepth += 1;
  }

  while(right !== null) {
    right = right.right;
    rightDepth += 1;
  }

  if (leftDepth === rightDepth) {
    return Math.pow(2, leftDepth) - 1;
  }

  return getCount(node.left) + getCount(node.right) + 1;
}