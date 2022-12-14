/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 16:42:58
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 17:14:20
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
var isSymmetric = function(root) {
  if (root === null) {
    return true;
  }

  return compare(root.left,root.right);
};

// 递归函数，判断两个节点是否相等
var compare = function(left, right) {
  // 递归中止条件
  if (left === null && right !== null) {
    return false;
  } else if (left !== null && right === null) {
    return false;
  } else if (left === null && right === null) {
    return true;
  } else if (left.val !== right.val) {
    return false;
  }

  // 两个节点相同,比较他们的内侧和外侧节点
  let outside = compare(left.left, right.right);
  let inside = compare(left.right, right.left);
  let isSame = outside && inside;

  return isSame;
}