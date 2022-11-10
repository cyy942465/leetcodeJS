/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let fast = head;
    let slow = head;

    if( head === null || head.next === null) {
      return null;
    }

    while(fast !== null) {
      slow = slow.next;
      if(fast.next !== null) {
        fast = fast.next.next;
      } else {
        return null;
      }
      if(fast === slow) {
        let ptr = head;
        while(ptr !== slow) {
          ptr = ptr.next;
          slow = slow.next;
        }
        return ptr;
      }
    }

    return null;
};