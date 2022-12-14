/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 15:10:08
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 15:18:16
 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let queue = [];
    if (root === null) {
      return root;
    }

    queue.push(root);
    while (queue.length > 0) {
      let size = queue.length;
      for (let i = 0; i < size; i ++) {
        let node = queue.shift();
        if (i === size - 1) {
          node.next = null;
        } else {
          let next = queue.shift();
          node.next = next;
          queue.unshift(next);
        }

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