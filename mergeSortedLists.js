/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//Program to merge two sorted linked lists

//Time Complexity O(n+m) Space Complexity O(n+m) for storing sorted list
//where n and m are the length of the lists

var mergeTwoLists = function(l1, l2) {
    let sortedList = new ListNode(0, null);
    if(!l2){
        return l1;
    }else if(!l1){
        return l2;
    }else if(l1.val <= l2.val){
        sortedList.val = l1.val;
        sortedList.next = mergeTwoLists(l1.next, l2);
    }else{
        sortedList.val = l2.val;
        sortedList.next = mergeTwoLists(l1, l2.next);
    }
    return sortedList;
};
