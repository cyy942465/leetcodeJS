/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-15 16:11:57
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-15 16:14:26
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    return getDepth(root);
};

let getDepth = function(node) {
  if (node === null) {
    return 0;
  }

  let size = node.children.length;
  let result = [];
  for (let i = 0; i < size; i++) {
    result.push(getDepth(node.children[i]));
  }

  let max = 0;
  result.forEach(value => {
    if (value > max) {
      max = value;
    }
  })

  return 1 + max;
}