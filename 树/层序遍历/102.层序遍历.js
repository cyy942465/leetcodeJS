/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 11:28:15
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 14:40:03
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let result = [];
  let queue = [];

  if (root === null) {
    return result;
  }
  queue.push(root);
  
  while (queue.length > 0) {
    let size = queue.length;
    let cur = [];
    for (let i = 0 ; i < size; i++) {
      let node = queue.shift();
      cur.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.push(cur);
  }

  return result;
};