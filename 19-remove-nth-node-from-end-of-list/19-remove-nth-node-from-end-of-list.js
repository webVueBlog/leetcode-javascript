/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 1.暴力求解
 * 找到列表的长度
 * 删除从列表开头数起第（L-n+1）个节点
 * 
 * 2.快慢指针法
 * 关键字：倒数第N个
 * 模式识别：
 * 涉及链表的特殊位置，考虑快慢指针
 * 要删除链表节点，找到它的前驱
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(-1, head);
    let [slow, fast] = [dummy, dummy];
    
    for (let i = 0; i <= n; i++) 
        fast = fast.next;
    
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    
    return dummy.next;
};