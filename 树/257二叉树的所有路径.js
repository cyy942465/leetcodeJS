/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-17 13:53:51
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-17 14:07:35
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let result = [];
  let path = [];

  let backtracking = function(node, path) {
    if (node === null) {
      return;
    }
    if (node.left === null && node.right === null) {
      let resultItem = '';
      let size = path.length;
      for (let i = 0; i < size; i++) {
          resultItem += path[i] + "->";
      }
      resultItem += node.val;
      result.push(resultItem);
      return;
    }

    path.push(node.val);
    backtracking(node.left, path);
    backtracking(node.right, path);
    path.pop();
  }

  backtracking(root, path);

  return result;
};