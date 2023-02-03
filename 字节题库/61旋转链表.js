/*
 * @Author: cyy
 * @Date: 2023-02-02 22:34:19
 * @LastEditors: cyy
 * @LastEditTime: 2023-02-02 22:46:22
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // 获取链表长度
    let length = 0;
    let cur = head;
    while(cur) {
        length ++;
        cur = cur.next;
    }

    k %= length;
    if (length <= 1 || k === 0) {
        return head;
    }
    let step = length - k;
    cur = head;
    // 寻找新的头节点
    for (let i = 1; i < step; i++) {
        cur = cur.next;
    }
    let newHead = cur.next;
    cur.next = null;
    cur = newHead;
    // 尾接
    while (cur.next) {
        cur = cur.next;
    }
    cur.next = head;
    return newHead;
};