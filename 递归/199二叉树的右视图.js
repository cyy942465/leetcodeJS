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
 * @return {number[]}
 */
let result = []; // 存储结果

var rightSideView = function(root) {
  result = [];
  // DFS，按照根节点，右子树，左子树的顺序，将当前深度第一次出现的节点放入数组中
  dfs(root, 0);
  return result;
};

let dfs = function(root, depth) {
  if (root === null) {
    return;
  }

  if (depth === result.length) {
    result.push(root.val);
  }

  depth++;
  dfs(root.right, depth);
  dfs(root.left, depth);
}