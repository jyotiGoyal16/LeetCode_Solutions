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

//Program to sort a given linked list. We used merge sort to sort the linked list here.

//Function to sort linked list Time Complexity O(nlogn) - Based on sorting technique
//Space Complexity O(n) (for storing list values in array) where n is the length of list

var sortList = function(head) {
    if(!head || !head.next){
        return head;
    }
    
    let current = head;
    let arr = [];
    while(current){
        arr.push(current.val);
        current = current.next;
    }
    
    arr.sort((a, b) => a-b);
    
    head.val = arr[0];
    current = head;
    for(let i = 1; i < arr.length; i++){
        current.next.val = arr[i];
        current = current.next;
    }
    current.next = null;
    return head;
};

//HELPER FUNCTIONS

//Merge two sorted linked lists
function mergeSortedLists(list1, list2){
    let result = null;
    if(!list1){
        return list2;
    }else if(!list2){
        return list1;
    }else if(list1.val < list2.val){
        result = list1;
        result.next = mergeSortedLists(list1.next, list2);
    }else{
        result = list2;
        result.next = mergeSortedLists(list1, list2.next);
    }
    return result;
}

//Find the middle of a linked list
function findMiddleOfList(head){
    let slowPtr = head;
    let fastPtr = head;
    
    while(fastPtr.next && fastPtr.next.next){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    
    return slowPtr;
}

//sort a linked list Time complexity O(nlogn) Space complexity O(1)
var sortList = function(head) {
    if(!head || !head.next){
        return head;
    }
    
    let result = null;
    let mid = findMiddleOfList(head);
    
    let middleNode = mid.next;
    mid.next = null;
    
    let left = sortList(head);
    let right = sortList(middleNode);
    
    result = mergeSortedLists(left, right);
    return result;
    
}
