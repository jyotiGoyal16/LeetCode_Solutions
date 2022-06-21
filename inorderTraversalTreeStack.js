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

//1st recursive approach using javascript closure. Time complexity O(n) Space complexity O(n)
var inorderTraversal = function(root) {
    let res = [];
    function helper(root, res){
        if(root){
            helper(root.left, res);
            res.push(root.val);
            helper(root.right, res);
        }
    }
    helper(root, res);
    return res;
    
};

//2nd recursive approach - same time and space complexity as above
var inorderTraversal = function(root) {
    let res = [];
    helper(root, res);
    return res;
}

var helper = function(root, arr){
    if(root){
        helper(root.left, arr);
        arr.push(root.val);
        helper(root.right, arr);
    }
}

//3rd recursive approach with javascript spread opearators. Same time and space complexity
var inorderTraversal = function(root) {
    if(!root){
        return [];
    }
        return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}

//Iterative approach with same time and space complexity
var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let curr = null;
    
  //base cases
    if(!root)
        return res;
    else if(root && (!root.left && !root.right))
        return [root.val];
  
  //logic  
    while(root || stack.length > 0){
        if(root){
            stack.push(root);
            root = root.left;
        }else{
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
}
