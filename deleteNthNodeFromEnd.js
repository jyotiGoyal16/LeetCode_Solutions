/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//Program to delete Nth node from the end of the list
//Time complexity O(n) Space complexity O(1)

var removeNthFromEnd = function(head, n) {
   let pointer1 = head;
   let pointer2 = head;
   let counter = 0;
    while(counter < n){
        //for deleting head node
        if(pointer1.next === null && counter === n-1){
            head = head.next;
            return head;
        }
        
        pointer1 = pointer1.next;
        counter++;
    }
    
    while(pointer1.next !== null){
        pointer1 = pointer1.next;
        pointer2 = pointer2.next; 
    }
    
    pointer2.next = pointer2.next.next;
    return head;
};
