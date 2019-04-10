// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let runner = head;
    let toBeAdded = false;
    while(l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let val = val1 + val2 + (toBeAdded && 1);
        runner.next = new ListNode(val%10);
        toBeAdded = false;
        if(val >= 10) {
            toBeAdded = true;
        }
        
        
        l1 ? l1 = l1.next : null;
        l2 ? l2 = l2.next : null;
        runner = runner.next;
    }
    
    if(toBeAdded) {
        runner.next = new ListNode(1);
    }

    return head.next;
};