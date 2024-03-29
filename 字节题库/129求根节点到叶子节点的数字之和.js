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
 * @return {number}
 */
var sumNumbers = function(root) {
    let result = [];
    let path = [];

    let backTracking = function(root, path) {
        if (root === null) {
            return;
        }
        if (root.left === null && root.right === null) {
            // path.push(root.val);
            // console.log(path);
            const len = path.length;
            let sum = 0;
            for (let i = 0; i < len; i++) {
                const cur = path[i];
                sum += cur * Math.pow(10, len - i);
            }
            result.push(sum + root.val);
            return;
        }

        path.push(root.val);
        backTracking(root.left, path);
        backTracking(root.right, path);
        path.pop();
    }

    backTracking(root, path);
    // console.log(result);

    return result.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
};