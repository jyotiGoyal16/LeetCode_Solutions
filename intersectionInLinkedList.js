/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//Program to find the intersecting node of two linked list.

/* HELPER FUNCTIONS */

//function to find length of the list
function getListLength(head){
    let length = 0;
    
    while(head){
        length++;
        head = head.next;
    }
    return length;
}

//function to traverse given number of nodes in the list
function traverseDiffNode(head, diff){
    let current = head;
    let count = 0;
    while(current && count < diff){
        count++;
        current = current.next;
    }
    return current;
}

//Using Hashing- Time complexity O(m+n) where m and are length of linked lists
//Space Complexity O(n)

var getIntersectionNode = function(headA, headB) {
    let map = new Set();
    let currentA = headA;
    let currentB = headB;
    while(currentA){
        map.add(currentA);
        currentA = currentA.next;
    }
    while(currentB){
        if(map.has(currentB)){
            return currentB;
        }
        currentB = currentB.next;
    }
    return null;
};

//Using two pointers - calculate length of both lists and calculate difference(d) between the lengths.
//Now traverse the bigger list from the first node till d nodes. And from there on, move both the //pointers parallely till we reach end or we find intersecting node

//Time Complexity O(n) Space Complexity O(1)

var getIntersectionNode = function(headA, headB) {
    let currentA = headA;
    let currentB = headB;
    let lengthA = getListLength(currentA);
    let lengthB = getListLength(currentB);
      
    let difference = Math.abs(lengthA - lengthB);
    
    if(lengthA > lengthB){
        currentA = traverseDiffNode(currentA, difference);
        currentB = headB;
    }else{
        currentB = traverseDiffNode(currentB, difference);
        currentA = headA;
    }
    
    while(currentA && currentB){
        if(currentA === currentB){
            return currentA;
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }
    return null;
}
