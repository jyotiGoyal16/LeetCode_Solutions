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

//Time complexity O(n) Space complexity O(1)
var deleteDuplicates = function(head) {
    if(!head || !head.next){
        return head;
    }
    let curr = head;
    let next = curr.next;
    while(curr && next){
        if(curr.val !== next.val){
            curr.next = next;
            curr = next;
        }
        next = next.next;
    }
    curr.next = null;
    return head;
};
