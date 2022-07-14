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
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0, head);
    let curr = dummy;
    
    while (curr.next?.next) {
        if (curr.next.val === curr.next.next.val) {
            const { val } = curr.next;
            while (curr.next?.val === val) 
                curr.next = curr.next.next;
        }       
        
        else curr = curr.next;
    }
    
    return dummy.next;
};