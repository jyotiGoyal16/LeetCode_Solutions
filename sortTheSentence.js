//Question Link - https://leetcode.com/problems/sorting-the-sentence/
//Time complexity O(n) for traversing the string sentence
//Space complexity O(1) as constant space is used (as given in question max words are 9)

/**
 * @param {string} s
 * @return {string}
 */

var sortSentence = function(s) {
    let arr = s.split(' ');
    let temp = new Array(arr.length);
    
    for(let i = 0; i < arr.length; i++){
        let index = arr[i].length - 1;
        let newIndex = arr[i][index];
        temp[newIndex-1] = arr[i].slice(0, index);
    }
    
    return temp.join(" ");
};

var sortSentence = function(s) {
    let splitS = s.split(' ');
    let res = {};
    
    for(let val of splitS){
        res[val[val.length-1] - 1] = val.slice(0, -1);
    }
    
    return Object.values(res).join(' ');
}
