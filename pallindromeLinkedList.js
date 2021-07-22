/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//Program to check if a singly linked list is pallindrome or not

//Using extra space(array or stack)- We are using array here to store all list elements in first pass
//And then we scan the array (backwards) matching array elements with list elements(from front)

//Time complexity O(n) Space complexity O(n)

var isPalindrome = function(head) {
    if(head === null || head.next === null){
        return true;
    }
    let arr = new Array();
    let current = head;
    while(current){
        arr.push(current.val);
        current = current.next;
    }
    let index;
    current = head;
    for(index = arr.length-1; index >= 0; index--){
        if(arr[index] !== current.val){
            return false;
        }
        current = current.next;
    }
    return true;
};

//Using middle node and reverse concept- Find the middle of the node and reverse the second half.
//Compare the first half and the second half to see if they match.

//Time Complexity O(n) Space complexity O(1)

//function to find middle of the list
function findMiddleOfList(head){
    let slowPtr = head;
    let fastPtr = head;
    
    while(fastPtr && fastPtr.next){
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
    }
    
    //For odd number of nodes, we need to compare elements only before and after the middle node
    if(fastPtr && fastPtr.next === null){
        return slowPtr.next;
    }
    
    return slowPtr;
}

//function to reverse the list
function reverseList(head){
    let nextNode, prev = null;
   while(head){
       nextNode = head.next;
       head.next = prev;
       prev = head;
       head = nextNode;
   }
    return prev;
}

//function to check pallindrome list
var isPalindrome = function(head) {
    let middleNode = findMiddleOfList(head);
    let reversedListHead = reverseList(middleNode);
    let current = head;
    
    while(reversedListHead !== null){
        if(reversedListHead.val !== current.val){
            return false;
        }
        reversedListHead = reversedListHead.next;
        current = current.next;
    }
    return true;
}
