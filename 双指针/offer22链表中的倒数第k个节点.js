/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  let first = head;
  let second = head;
  let count = 1;
  // 第一次遍历数组
  while(first.next != null) {
    first = first.next;
    count++;
  }
  // count为链表的长度
  // 第二次遍历数组
  for(let i = 0; i < count - k; i++) {
    second = second.next;
  }

  return second;
};