/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//Program to merge K sorted lists into one list and output that list

//function to merge two sorted linked lists. Time Complexity O(m+n) where m and are lists length

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

//function to merge k sorted linked lists
//Time Complexity O(nlogk) where n is the size of each linked list and k is the number of linked lists
//Space Complexity O(1) (we have space complexity of O(n) for recusrive stack)

var mergeKLists = function(lists) {
    if(!lists.length){
        return null;
    }
    let length = lists.length - 1;
    let resultantIndex, lastIndex;
    
    // repeat until only one list is left
    while(length !== 0){
        resultantIndex = 0, lastIndex = length;
        
        //(resultantIndex, lastIndex) forms a pair 
        //eg. if k = 4 then we merge 0th & 3rd list(in 0th list), 
        //1st and 2nd list(on 1st list) and on 2nd iteration we merge 0th and 1st list in 0th list
        while(resultantIndex < lastIndex){
            lists[resultantIndex] = mergeSortedLists(lists[resultantIndex], lists[lastIndex]);
            
            resultantIndex++;
            lastIndex--;
            
            // If all pairs are merged, update last
            if(resultantIndex >= lastIndex){
                length = lastIndex;
            }
        }
    }
    return lists[0];
};
