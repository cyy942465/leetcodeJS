/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 15:26:46
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 16:25:10
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
  let curDepth = 0;
  let min = Infinity;
  let queue = [];

  if (root === null) {
    return 0;
  }

  queue.push(root);
  while (queue.length > 0) {
    curDepth += 1;
    let size = queue.length;
    for (let i = 0; i < size; i ++) {
      let node = queue.shift();
      if (node != root && (node.left === null && node.right === null)) {
        return curDepth;
      }
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  return curDepth;
};