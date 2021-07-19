/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

//Program to delete a node if head not is not given and the node to be deleted is given

//Logic- swap the given node data with next node data and update the node's next link
//Time complexity O(1) space complexity O(1)

//function to swap nodes data
function swap(node1, node2){
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
};

var deleteNode = function(node) {
    let nextNode = node.next;
    swap(node, nextNode);
    node.next = nextNode.next;
};
