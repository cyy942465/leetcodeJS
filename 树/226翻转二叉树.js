/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 16:26:42
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 16:39:58
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  let queue = [];
  if (root === null) {
    return root;
  }

  queue.push(root);
  while(queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i ++) {
      let node = queue.shift();
      // 交换左右子树
      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  return root;
};