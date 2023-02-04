/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if (A === null || B === null) {
        return false;
    }

    return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function recur(a, b) {
    if (b === null) {
        return true;
    }
    if (a === null || a.val !== b.val) {
        return false;
    }
    return recur(a.left, b.left) && recur(a.right, b.right);
}