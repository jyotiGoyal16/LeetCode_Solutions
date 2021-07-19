/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//Program to find cycle in a linked list

//using hashing - Time complexity O(n) Space complexity O(n)
var hasCycle = function(head) {
    let set = new Set();
    let current = head;
    while(current){
        if(set.has(current)){
           return true; 
        }else{
            set.add(current);
        }
    }
    return false;
};

//Using Floyd cylcle finding algorithm
//Time Complexity O(n) Space complexity O(1)
var hasCycle = function(head) {
    let slowPtr = head;
    let fastPtr = head;
    
    if(!head || !head.next){
        return false;
    }
    while(fastPtr && fastPtr.next){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if(slowPtr === fastPtr){
            return true;
        }
    }
    return false;
}
