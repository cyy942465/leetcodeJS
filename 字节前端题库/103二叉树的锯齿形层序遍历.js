/*
 * @Author: cyy
 * @Date: 2023-02-01 17:40:25
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-01 17:53:30
 * @Description: default
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = [];
    let queue = []; // 遍历队列
    let flag = 0; // 0为正序，1为反序

    if (root === null) {
        return result;
    }

    queue.push(root);

    while (queue.length > 0) {
        let len = queue.length;
        let cur = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            cur.push(node.val);
        }
        if (flag === 1) {
            cur = cur.reverse();
            console.log(cur);
            flag = 0;
        } else {
            flag = 1;
        }
        result.push(cur);
    }

    return result;
};