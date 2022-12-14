/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-15 16:16:11
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-15 16:29:10
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
var minDepth = function(root) {
  return getDepth(root);
};

let getDepth = function(node) {
  if (node === null) {
    return 0;
  }
  let leftDepth = getDepth(node.left);
  let rightDepth = getDepth(node.right);

  if (leftDepth === 0 && rightDepth === 0) {
    return 1;
  } else if (leftDepth === 0) {
    return rightDepth + 1;
  } else if (rightDepth === 0) {
    return leftDepth + 1;
  } else {
    return 1 + Math.min(leftDepth, rightDepth);
  }

}