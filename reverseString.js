/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//Question Link - https://leetcode.com/problems/reverse-string/
//Time complexity O(n/2) Space complexity O(1)
var reverseString = function(s) {
    let first = 0;
    let last = s.length - 1;
    let temp;
    
    while(first < last){
        swap(s, first, last);
        first++;
        last--;
    }
    
    return s;
};

var swap = function(s, c1, c2){
    let temp = s[c1];
    s[c1] = s[c2];
    s[c2] = temp;
}
