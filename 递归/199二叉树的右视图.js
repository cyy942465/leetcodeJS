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
 var rightSideView = function(root) {
  if (root === null) {
    return null;
  } else if (root.left === null && root.right === null) {
    return [root.val];
  } else if (root.left === null && root.right !== null) {
    return rightSideView(root.right).unshift(root.val);
  } else if (root.left !== null && root.right === null) {
    return rightSideView(root.left).unshift(root.val);
  } else {
    const lenR = rightSideView(root.right);
    const lenL = rightSideView(root.left);
    if (lenL <= lenR) {
      return rightSideView(root.right).unshift(root.val);
    } else {
      const catArr = rightSideView(root.left).slice(lenR);
      rightSideView(root.right).push(catArr);
      return rightSideView(root.right).unshift(root.val);
    }

  }
};