/**
 * @param {string} s
 * @return {number}
 */

//Question Link- https://leetcode.com/problems/first-unique-character-in-a-string/

//[l-2, o-2, v-1, e-4, t-1, c-1, o-1, d-1] "loveleetcode"
//Two passes over string. Time complexity O(n) ans space complexity O(n) for map
var firstUniqChar = function(s) {
    let map = new Map();
    let i = 0;
    
    while(i < s.length){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        }else{
            map.set(s[i], 1);
        }
        i++;
    }
    
    for(let i = 0; i < s.length; i++){
        if(map.get(s[i]) === 1)
            return i;
    }
    
    return -1;
};


//Single pass over string array and using constant length count array
//keep index as -2 for repeating ones and store index for the non repeated characters.
//Time complexity O(n) ans space complexity is O(1) as constant length is used for count array
var firstUniqChar = function(s) {
    let countArr = Array.from({length: 256}).fill(-1);
    
    for(let i = 0; i < s.length; i++){
        if(countArr[s.charCodeAt(i)] === -1){
            countArr[s.charCodeAt(i)] = i;
        }else{
            countArr[s.charCodeAt(i)]  = -2;
        }
    }
    
    let res = Infinity;
    for(let i = 0; i < countArr.length; i++){
        if(countArr[i] >= 0){
            res = Math.min(res, countArr[i]);
        }
    }
    
    if(res === Infinity) return -1;
    return res;
    return -1;
}
