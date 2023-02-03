/*
 * @Author: cyy
 * @Date: 2023-02-01 22:16:54
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-01 22:22:54
 * @Description: default
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    } else {
        const newHead = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
    
};