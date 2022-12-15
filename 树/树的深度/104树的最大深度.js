/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-15 16:00:54
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-15 16:10:28
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
var maxDepth = function(root) {
  return getDepth(root);
};

let getDepth = function(node) {
  if (node === null) {
    return 0;
  }

  let leftDepth = getDepth(node.left);
  let rightDepth = getDepth(node.right);

  return 1 + Math.max(leftDepth, rightDepth);
}