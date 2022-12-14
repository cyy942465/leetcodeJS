/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 15:23:15
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 15:26:05
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
  let queue = [];
  let depth = 0;

  if (root === null) {
    return depth;
  }

  queue.push(root);
  while (queue.length > 0) {
    depth += 1;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node= queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  return depth;
};