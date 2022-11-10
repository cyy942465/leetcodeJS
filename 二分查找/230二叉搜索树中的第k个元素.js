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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
  // 按中序遍历获得排列好的数组并返回值
  let stack = []; // 辅助中序遍历
  let cur = root;
  while(cur != null || stack.length) {
    while(cur != null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    k--;
    if (k === 0) {
      break;
    }
    cur = cur.right;
  }

  return cur.val;
};