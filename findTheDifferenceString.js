/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

//Question Link - https://leetcode.com/problems/find-the-difference/

//Time complexity O(n^2) - split is O(n) + forEach O(n) * replace is approx O(n) = n + n^2 ~ n^2
//Space complexity O(1)
var findTheDifference = function(s, t) {
    s.split("").forEach(char => t = t.replace(char, ""));
    return t;
}

//Time complexity O(nlogn) - split is O(n) + sort is O(nlogn) + for loop O(n) ~ O(nlogn)
//Space complexity is O(1)
var findTheDifference = function(s, t) {
    s = s.split("").sort();
    t = t.split("").sort();
    for(let i = 0; i < s.length || i < t.length; i++){
        if(s[i] !== t[i])
            return t[i];
    }
}

//Using javascript string methods and XOR operations - Time complexity O(n)
//Space complexity O(1)
var findTheDifference = function(s, t) {
    s = s.concat(t);
    let res = 0;
    
    for(let i = 0; i < s.length; i++){
        res ^= s[i].charCodeAt(0);
    }
    return String.fromCharCode(res);
};


//using hashmap - Time complexity O(n)
//Space complexity - O(n) for storing counts of characters of string s
var findTheDifference = function(s, t) {
    let map = new Map();
    
    for(let key of s){
        map.set(key, (map.get(key) + 1) || 1);
    }
    
    for(let key of t){
        if(!map.has(key)) return key;
        let count = map.get(key) - 1;
        if(count < 0) return key;
        map.set(key, count);
    }
}
