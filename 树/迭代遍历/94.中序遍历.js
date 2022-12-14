/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 11:03:19
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 11:09:09
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
 var postorderTraversal = function(root) {
  let stack = [];
  let result = [];
  if (root === null) {
    return result;
  }
  let cur = root;
  while (cur !== null || stack.length > 0) {
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      let node = stack.pop();
      result.push(node.val);
      cur = node.right;
    }
  }

  return result;
};