/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-19 16:20:58
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-19 16:37:26
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    return travelTree(preorder, inorder);
};

let travelTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }

    // 获取根元素
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal, null, null);

    // 叶子节点的情况
    if (preorder.length === 1) {
        return root;
    }

    // 找到中序遍历的切割点
    let delimiterIndex;
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === root.val) {
            delimiterIndex = i;
            break;
        }
    }

    // 切割中序遍历序列
    let leftInorder = inorder.slice(0, delimiterIndex);
    let rightInorder = inorder.slice(delimiterIndex + 1);

    // 去除根元素 
    preorder.shift();

    // 切割前序遍历序列
    let leftPreorder = preorder.slice(0, leftInorder.length);
    let rightPreorder = preorder.slice(leftInorder.length);

    root.left = travelTree(leftPreorder, leftInorder);
    root.right = travelTree(rightPreorder, rightInorder);

    return root;
}