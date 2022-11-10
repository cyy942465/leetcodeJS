/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }

    // 第一次遍历链表,构造虚拟节点S'
    for (let node = head; node != null; node = node.next.next ) {
        const newNode = new Node(node.val, node.next, null);
        node.next = newNode;
    } 

    // 第二次遍历链表,设置虚拟节点S’的随机指针
    for (let node = head; node != null; node = node.next.next) {
        const newNode = node.next;
        newNode.random = node.random !== null ? node.random.next : null ;
    }

    const headNewNode = node.next;
    // 第三次遍历链表,将虚拟节点相连
    for (let node = head; node != null; node = node.next) {
        const newNode = node.next;
        node.next = newNode.next;
        newNode.next = (newNode.next !== null) ? newNode.next.next : null ;
    }

    return headNewNode;
};