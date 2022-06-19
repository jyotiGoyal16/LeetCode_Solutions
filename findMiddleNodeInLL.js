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

//requires two pass time complexity O(n) Space complexity O(1)
var middleNode = function(head) {
    let curr = head;
    let length = 0;
    let mid = 0;
    
  //find length of linkedlist
    while(curr){
        length++;
        curr = curr.next;
    }
    
  //travel upto half length and return middle node
    mid = Math.floor(length/2);
    curr = head;
    
    while(curr && mid > 0){
        mid = mid - 1;
        curr = curr.next;
    }
    return curr;
};


//Find middle node in one pass complexity O(n/2) Space complexity O(1)
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}
