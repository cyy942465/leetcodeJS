/*
 * @Author: cyy
 * @Date: 2023-02-02 22:47:33
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-03 17:35:22
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    // 获取链表长度
    let cur = head;
    while (cur) {
        length ++;
        cur = cur.next;
    }
    if (n === length) {
        return head.next;
    }

    // 删除倒数第k个节点
    cur = head;
    let pre = cur;
    for (let i = 0; i < length - n; i++) {
        pre = cur;
        cur = cur.next;
    }
    pre.next = cur.next;
    cur = null;

    return head;
};