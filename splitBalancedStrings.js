//Question link - https://leetcode.com/problems/split-a-string-in-balanced-strings/
//Time complexity O(n) to traverse the string
//Space complexity O(1)

/**
 * @param {string} s
 * @return {number}
 */

var balancedStringSplit = function(s) {
    let rCount = 0;
    let lCount = 0;
    let count = 0;
    
    for(let i = 0; i < s.length; i++){
        s[i] === 'R' ? rCount++ : lCount++;
        if(rCount === lCount){
            count++;
            rCount = 0;
            lCount = 0;
        }
    }
    return count;
};

//using object to eliminate extra if condition
var balancedStringSplit = function(s) {
    let count = 0;
    let res = {R: 0, L: 0};
    
    for(let val of s){
        res[val]++;
        if(res['R'] === res['L']){
            count++;
            res['R'] = 0;
            res['L'] = 0;
        }
    }
    return count;
};

//Using only one counter for R and L letters
var balancedStringSplit = function(s) {
    let count = 0;
    let resCount = 0;
    
    for(let i = 0; i < s.length; i++){
        s[i] === 'R' ? count++ : count--;
        if(count === 0) resCount++;
    }
    
    return resCount;
}
