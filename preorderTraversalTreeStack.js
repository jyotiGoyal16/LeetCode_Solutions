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
 * @return {number[]}
 */

//Time complexity O(n) space complexity O(n) recursive approach
var preorderTraversal = function(root) {
    let res = [];
    helper(root, res);
    return res;
};

var helper = function(root, arr){
    if(root){
        arr.push(root.val);
        helper(root.left, arr);
        helper(root.right, arr); 
    }
}


//Time complexity O(n) space complexity O(n) recursive approach using javascript spread operator
var preorderTraversal = function(root) {
    if(!root)
        return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};


//Iterative approach Time complexity O(n) space complexity O(n) for maintaining stack
var preorderTraversal = function(root) {
    let res = [];
    let stack = [root];
    
    if(!root)
        return res;
    else if(root && (!root.left && !root.right))
        return [root.val];
    
    while(stack.length > 0){
        root = stack.pop();
        res.push(root.val);
        if(root.right) stack.push(root.right);
        if(root.left) stack.push(root.left);
    }
    return res;
}
