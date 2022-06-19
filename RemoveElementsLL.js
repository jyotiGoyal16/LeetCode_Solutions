/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

//Time complexity O(n) and Space complexity O(1)
var removeElements = function(head, val) {
    
    if(!head)
        return head;
    
    let curr = head;
    let prev = null;
    let newHead = prev;
    
     while(curr){
         if(curr.val === val){
             if(prev)
                 prev.next = curr.next;
         }else{
             prev = curr;
         }
         curr = curr.next;
         if(prev && !newHead)
             newHead = prev;
     }
    
    return newHead;
};
