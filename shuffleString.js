//Question Link - https://leetcode.com/problems/shuffle-string/
//Time complexity - O(n) for string/array traversal
//Space complexity - O(1)

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

var restoreString = function(s, indices) {
    let res = [];
    for(let i = 0; i < indices.length; i++){
        res[indices[i]] = s[i];
    }
    return res.join('');
};
