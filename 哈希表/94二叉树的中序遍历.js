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
 var inorderTraversal = function(root) {
  // 使用栈来进行中序遍历
  let stack = [];
  let set = new Set; // 用于存储遍历过左子树的节点
  let result = []; // 存储结果

  if (root === null || root.val === undefined) {
    return [];
  }
  
  stack.push(root);

  while(stack.length !== 0) {
    const now = stack.pop();
    // 已经遍历过左子树的节点
    if (set.has(now)) {
      result.push(now.val);
      if (now.right !== null) {
        stack.push(now.right);
      }
    } else { // 未查看过左子树
      set.add(now);
      stack.push(now);
      if (now.left !== null) {
        stack.push(now.left);
      }
    }
  }

  return result;
};