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

//Program to add two numbers of a reversed linked list

//Time Complexity O(n) Space complexity O(n)

var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let carry = 0;
    let sumHead = new ListNode(0);
    let curr = sumHead;
    let val1, val2;
    
    while(l1 || l2){
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;
        sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        sumHead.next = new ListNode(sum % 10);
        sumHead = sumHead.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    if(carry > 0){
        sumHead.next = new ListNode(carry);
    }
    return curr.next;
};
