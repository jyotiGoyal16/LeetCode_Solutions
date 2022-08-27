//Question link - https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
//Time complexity O(n) where n is the array length
//Space complexity O(1)

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxLength = 0;
    
    sentences.forEach(sn => {
        let wordLength =  sn.split(" ").length;
        if(wordLength > maxLength) maxLength = wordLength;
    });
    
    return maxLength;
};
