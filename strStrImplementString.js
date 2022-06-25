/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//Question Link - https://leetcode.com/problems/implement-strstr/

//Time complexity O(n) where n is length of haystack and space complexity is O(1)
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    if(needle.length > haystack.length) return -1;
    
    let p2 = 0;
    let i;
    
    for(i = 0; i < haystack.length; i++){
        if(p2 === needle.length)
            break;
        if(haystack[i] === needle[p2])
            p2++;
        else{
            if(p2 > 0)
                i = i - p2;
            p2 = 0;
        }
    }
    
    return p2 < needle.length ? -1 : i-p2;
};
