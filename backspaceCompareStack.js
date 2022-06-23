/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Question link - https://leetcode.com/problems/backspace-string-compare/
//Time complexity O(n) and space complexity O(n)
var backspaceCompare = function(s, t) {
    let s1 = "", s2 = "";
    
    s1 = helper(s);
    s2 = helper(t);
    
    return s1.join("") == s2.join("");
};

var helper = function(str){
    let stack = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === '#') stack.pop();
        else stack.push(str[i]);
    }
    return stack;
}
