/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 
//decimal of 1100 is 12. Time complexity O(n) Space Complexity O(1)
var getDecimalValue = function(head) {
    let curr = head;
    let pow = -1;
    let decimalNumber = 0;
    
    //Find length of the linked list which will equal to power of 2 from left side
    while(curr){
        pow++;
        curr = curr.next;
    }
    
    curr = head;
    while(curr){
        decimalNumber += (curr.val * Math.pow(2, pow));
        pow--;
        curr = curr.next;
    }
    return decimalNumber;
};
