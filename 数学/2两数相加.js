/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {

  let num1 = l1;
  let num2 = l2;
  let last;

  while(num1 != null && num2 != null) {
    num1.val = num1.val + num2.val;
    let temp = num1;
    // 进位
    while(temp.val >= 10) {
      temp.val -= 10;
      if (temp.next != null) {
        temp.next.val += 1;
        temp = temp.next;
      } else {
        temp.next = new ListNode(1,null);
        temp = temp.next;
      }
    }
    last = num1;
    num1 = num1.next;
    num2 = num2.next;
  }

  // num2未遍历完的情况
  while(num2 != null) {
    last.next = num2;
    num2 = num2.next;
    last = last.next;
  }

  return l1;
};