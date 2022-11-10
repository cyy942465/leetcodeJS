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
  let count = 1; // 用于计算链表的长度
  let first = head;

  while(first.next != null) {
    first = first.next;
    count++;
  }

  if(count === 1) {
    return null;
  }

  // 头结点
  let dummy = {
    val: 0,
    next: head
  }

  let cur= dummy;

  for(let i = 1; i < count - n + 1; i++) {
    cur = cur.next;
  }

  // 删除节点
  cur.next = cur.next.next;

  return dummy.next;
};