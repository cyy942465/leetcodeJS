/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-19 16:47:03
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-19 16:59:26
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (root1 === null && root2 === null) {
        return null;
    }

    let rootVal;
    if (root1 === null) {
        rootVal = root2.val;
    } else if (root2 === null){
        rootVal = root1.val;
    } else {
        rootVal = root1.val + root2.val;
    }

    let root = new TreeNode(rootVal, null, null);

    root.left = mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null);
    root.right = mergeTrees(root1 ? root1.right : null, root2 ? root2.right : null);

    return root;
};