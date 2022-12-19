/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-17 14:21:54
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-18 20:55:05
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
var findBottomLeftValue = function (root) {
  if (root === null) {
    return 0;
  }
  let queue = [];
  let left = 0;
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (i === 0) {
        left = node.val;
      }
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
  
  return left;
};
