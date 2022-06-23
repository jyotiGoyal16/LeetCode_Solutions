/**
 * @param {string} s
 * @return {string}
 */

//Question - https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
//Using stack - Time complexity O(n) Space complexity O(n)
var removeDuplicates = function(s) {
    if(s.length === 1)
        return s;
    let stack = [s[0]];
    let i = 1;
    let curr;
    
    while(i < s.length){
        curr = stack.pop();
        if(curr !== s[i]){
            stack.push(curr, s[i]);
        }
        i++;
    }
    
    return stack.join("");
};
