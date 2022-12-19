/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-12-18 21:23:40
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-12-18 21:49:11
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    return travelTree(inorder, postorder);
};

let travelTree = function(inorder, postorder) {
    if (postorder.length === 0) {
        return null;
    }

    // 从后序遍历数组的最后一个元素获取根元素的值 
    let rootVal = postorder[postorder.length - 1];
    let root = new TreeNode(rootVal, null, null);

    // 叶子节点的情况
    if (postorder.length === 1) {
        return root;
    }

    // 找到中序遍历的切割点
    let delimiterIndex = inorder.filter(value => {
        return value === root.val;
    });

    // 切割中序遍历数组
    let leftInorder = inorder.slice(0, delimiterIndex[0]);
    let rightInorder = inorder.slice(delimiterIndex[0] + 1);

    // 后序遍历数组舍弃末尾元素
    postorder.pop();

    // 切割后序遍历数组;
    let leftPostOrder = postorder.slice(0, leftInorder.length);
    let rightPostOrder = postorder.slice(leftInorder.length);

    root.left = travelTree(leftInorder, leftPostOrder);
    root.right = travelTree(rightInorder, rightPostOrder);

    return root;
}