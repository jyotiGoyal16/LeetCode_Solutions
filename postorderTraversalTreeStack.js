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

//Recursive approach 1. Time and space complexity O(n)
var postorderTraversal = function(root) {
    let res = [];
    helper(root, res);
    return res;
};

var helper = function(root, arr){
    if(root){
        helper(root.left, arr);
        helper(root.right, arr);
        arr.push(root.val);
    }
}

//Recursive approach 2 using javascript spread operators. Time and space complexity O(n)
var postorderTraversal = function(root) {
    if(!root)
        return [];
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
}


//find top of stack helper function
var top = function(stack){
    let length = stack.length;
    return stack[length - 1];
}

//Iterative approach. Time and space complexity O(n)
var postorderTraversal = function(root) {
    let res = [];
    let stack = [];
    
    if(!root)
        return res;
    if(root && (!root.left && !root.right))
        return [root.val];
    
    if(root.right) stack.push(root.right);
    stack.push(root);
    root = root.left; 
    
    while(stack.length > 0){
        if(root){
            if(root.right) stack.push(root.right);
            stack.push(root);
            root = root.left;
        }else{
            root = stack.pop();
            if(root.right && root.right === top(stack)){
                let temp = stack.pop();
                stack.push(root);
                root = temp;
            }else{
                res.push(root.val);
                root = null;
            }
        }
    }
    return res;
}
