/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

//Question Link- https://leetcode.com/problems/ransom-note/

//Time complexity O(n) + O(m) for two loops where n and m are length of magazine & ransomNote respectively. 
//Space complexity is O(n) for storing counts of characters of string magazine

var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    
    for(let key of magazine){
        map.set(key, (map.get(key) + 1) || 1);
    }
    
    for(let key of ransomNote){
        if(!map.has(key)) return false;
        let count = map.get(key) - 1;
        if(count < 0) return false;
        map.set(key, count);
    }
    
    return true;
};
