/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

//Question Link - https://leetcode.com/problems/word-pattern/

//Time complexity O(n) for traversing string and space complexity is O(2n) or O(n) for storing key value pair(hash map)
//n is the length of both string (they will be of equal length n)
var wordPattern = function(pattern, s) {
    let keyMap = new Map();
    let valueMap = new Map();
    let arr = s.split(" ");
    let i = 0;
    
    if(pattern.length !== arr.length) return false;
    if(pattern.length === 1 && arr.length === 1) return true;
    
    while(i < pattern.length){
        if(!keyMap.has(pattern[i]) && !valueMap.has(arr[i])){ //{a:b, b: a, b: cat, cat: b,}
            keyMap.set(pattern[i], arr[i]);
            valueMap.set(arr[i], pattern[i]);
        }else{
            if(keyMap.get(pattern[i]) !== arr[i] || valueMap.get(arr[i]) !== pattern[i]){
                return false;
            }
        }
        i++;
    }
    
    return true;
};
