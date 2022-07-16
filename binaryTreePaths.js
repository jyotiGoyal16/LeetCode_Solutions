/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

//Question Link - https://leetcode.com/problems/binary-tree-paths/

//Using preorder DFS tree traversal 
//Time complexity O(n) where n is the number of nodes in the tree & space complexity is O(n) for stack
var binaryTreePaths = function(root) {
    let res = [];
    constructBinaryTreePaths(root, null, "", res);
    return res;
};

var constructBinaryTreePaths = function(root, prev, str, res){
    str += root.val;
    if(root.left || root.right)
        str += "->";
    if(!root.left && !root.right) {
        res.push(str);
        str = "";
    }
    if(root.left) constructBinaryTreePaths(root.left, root, str, res);
    if(root.right) constructBinaryTreePaths(root.right, root, str, res);
}
