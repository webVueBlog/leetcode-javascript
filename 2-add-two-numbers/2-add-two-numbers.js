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
    let res = new ListNode();
    let carry = 0;
    let node = res;
    while(l1 || l2 || carry > 0) {
        let v1 = l1 ? l1.val : 0,
            v2 = l2 ? l2.val : 0
        let sum = v1 + v2 + carry
        carry = Math.floor(sum/10)
        sum = sum % 10
        node.next = new ListNode(sum)
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
        node = node.next
    }
    return res.next;
};