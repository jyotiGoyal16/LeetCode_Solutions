/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Question Link - https://leetcode.com/problems/valid-anagram/

//Time complexity O(nlogn) for sorting and space complexity O(1)

var isAnagram = function(s, t) {  
    return [...s].sort().join("") === [...t].sort().join("");
};


//Time complexity O(n) and space complexity O(n)
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let count = {};
    let i = 0;
    
    while(i < s.length){
        count[s[i]] = (count[s[i]] || 0) + 1;
        i++;
    }
    
    i = 0;
    while(i < t.length){
        if(!count[t[i]]) return false;
        count[t[i]]--;
        i++;
    }
    
    return true;
}
