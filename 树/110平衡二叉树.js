/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-15 16:45:52
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-17 13:48:45
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (depth(root) === -1) {
    return false;
  } else {
    return true;
  }
};

let depth = function(node) {
  if (node === null) {
    return 0;
  }

  // 后序遍历，获取左子树的高度
  let leftDepth = depth(node.left);
  // 判断左子树是否为平衡二叉树
  if (leftDepth === -1) {
    return -1;
  }
  // 获取右子树的高度
  let rightDepth = depth(node.right);
  // 判断右子树是否为平衡二叉树
  if (rightDepth === -1) {
    return -1;
  }
  // 比较左右子树的高度，判断当前子树是否为平衡二叉树
  if (Math.abs(rightDepth - leftDepth) > 1) {
    return -1;
  } else {
    return 1 + Math.max(leftDepth, rightDepth);
  }
}