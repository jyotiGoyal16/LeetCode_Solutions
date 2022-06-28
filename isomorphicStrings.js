/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Question link - https://leetcode.com/problems/isomorphic-strings/

//Time complexity O(n) space complexity is O(2n) ~ O(n)
var isIsomorphic = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();
    let i = 0; 
    let j = 0;
    //s = "foo" t = "bar" {f: 0, o: 2} {b: 0, a: 1, r: 2}
    while(i < s.length && j < t.length){
        map1.set(s[i], i);
        map2.set(t[j], j);
        i++;
        j++;
    }
    //console.log([...map2.values()]);
    return JSON.stringify([...map1.values()]) === JSON.stringify([...map2.values()]);
};
