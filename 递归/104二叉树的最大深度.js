/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
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
  if (root === null) {
    return 0;
  } else if (root.left === null && root.right === null) {
    return 1;
  } else if (root.left !== null && root.right === null) {
    return 1 + maxDepth(root.left);
  } else if (root.left === null && root.right !== null) {
    return 1 + maxDepth(root.right);
  } else {
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
};