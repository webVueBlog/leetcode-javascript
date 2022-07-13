/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 1.暴力解法
 * 逐一比较最小
 * 模式识别：链表问题考虑哑节点
 * 2.递归
 * 合并（L1,L2）等价于L1->next=合并（L1->next，L2）
 * 模式识别：子问题和原问题具有相同结构，考虑自上而下的递归
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let curr = dummy;
    
    while (list1 && list2) {
        list1.val < list2.val
            ? [curr.next, list1] = [list1, list1.next]
            : [curr.next, list2] = [list2, list2.next];
        
        curr = curr.next;
    }
    
    curr.next = list1 ?? list2;
    
    return dummy.next;
};