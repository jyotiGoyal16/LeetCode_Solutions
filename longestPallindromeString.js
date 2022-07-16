/**
 * @param {string} s
 * @return {number}
 */

//Question Link- https://leetcode.com/problems/longest-palindrome/

//Using hashmap Time complexity O(n) for traversing string and space complexity is O(n) for storing characters count in string

var longestPalindrome = function(s) {
    let map = new Map();
    let longestPallindromeLength = 0;
    
    for(let i = 0; i < s.length; i++){
        map.set(s[i], (map.get(s[i]) + 1) || 1);
    }
    
    for(let [key, value] of map){
        if(longestPallindromeLength % 2 === 0){
            longestPallindromeLength += value;
        }else{
            if(value % 2 === 0)
                longestPallindromeLength += value;
            else
                longestPallindromeLength += (value - 1);
        }
    }
    
    return longestPallindromeLength;
};

//Similar appraoch as above using object instead of map and adding tp total every time after 2 counts of a character
//Time complexity O(n) and space complexity O(n)
var longestPalindrome = function(s) {
    let charCount = {};
    let total = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] in charCount){
            total += 2;
            delete charCount[s[i]];
        }else{
            charCount[s[i]] = 1;
        }
    }
    
    return s.length > total ? total + 1 : total;
}
