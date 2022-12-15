/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 17:17:24
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-15 10:16:10
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return compare(p,q);
};

let compare = function(left, right) {
  if (left === null && right !== null) {
    return false;
  } else if (left !== null && right === null) {
    return false;
  } else if (left === null && right === null) {
    return true;
  } else if (left.val !== right.val) {
    return false;
  }

  // 非空且相等的情况
  let leftSide = compare(left.left, right.left);
  let rightSize = compare(left.right, right.right);
  let isSame = leftSide && rightSize;

  return isSame;
}