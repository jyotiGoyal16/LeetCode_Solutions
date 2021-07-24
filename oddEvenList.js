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

//Program to group odd incides node together followed by even indices node together and return the rearranged list

//Using odd even pointers. Create 2 pointer for odd list, one for odd list head and another for odd list tail(last node). And similarly two pointers for even list.

//Time Complexity O(n) Space Complexity O(1)

var oddEvenList = function(head) {
    if(!head || !head.next){
        return head;
    }
    let odd = oddHead = head;
    let even = evenHead = head.next;
    
    while(odd.next && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    
    return oddHead;
};
