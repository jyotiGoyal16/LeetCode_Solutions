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

//Program to reverse a singly linked list 

//Using iterative approach to reverse linked list 
//Time complexity O(n) Space complexity O(1)
var reverseList = function(head) {
    let nextNode, previousNode = null;
    while(head){
        nextNode = head.next;
        head.next = previousNode;
        previousNode = head;
        head = nextNode;
    }
    return previousNode;
};

//Using recursive approach to reverse linked list
//Time Complexity O(n) Space complexity - O(n)-required for recursion stack
var reverseList = function(head) {
    let nextNode;
    if(!head || !head.next){
        return head;
    }
    
    nextNode = head.next;
    head.next = null;
    previousNode = reverseList(nextNode);
    nextNode.next = head;
    return previousNode;
};
