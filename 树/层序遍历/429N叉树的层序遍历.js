/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-14 14:59:06
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-14 15:04:38
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

      for (let i = 0; i < size; i++) {
        let node = queue.shift();
        cur.push(node.val);
        for (let j = 0; j < node.children.length; j ++) {
          let child = node.children[j];
          queue.push(child);
        }
      }

      result.push(cur);
    }

    return result;
};