/**
 * @param {string} s
 * @return {number}
 */

//Question Link - https://leetcode.com/problems/length-of-last-word/

//Time complexity is O(n) where n is the length of the string and space complexity is created array length to store splitted result
 var lengthOfLastWord = function(s) {
     s = s.trim();
     let strArr = s.split(" ");
     let length = strArr.length;
     return strArr[length -1].length;
 };


//Time complexity O(n) space complexity O(1)
var lengthOfLastWord = function(s) {
    let length = s.length;
    let i = length - 1;
    let count = 0;
    while(i >= 0){
        if(count === 0 && s[i] === " "){
            i--;
            continue;
        }else if(count !== 0 && s[i] === " "){
            break;
        }else if(s[i] !== " "){
            count++;
        }
        i--;
    }
    return count;
}
