/**
 * @param {number} columnNumber
 * @return {string}
 */

//Question Link - https://leetcode.com/problems/excel-sheet-column-title/


//Time complexity O(n) and space complexity is O(1)
var convertToTitle = function(columnNumber) {
    let res = "";
    while(columnNumber > 0){
        let charCode = (columnNumber - 1) % 26;
        res = String.fromCharCode(65 + charCode) + res;
        columnNumber = Math.floor((columnNumber - charCode)/26) || 0;
    }
    return res;
};
