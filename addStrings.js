/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

//Question Link - https://leetcode.com/problems/add-strings/

//Time complexity O(1) and space complexity is O(1)
var addStrings = function(num1, num2) {
    num1 = BigInt(num1);
    num2 = BigInt(num2);
    let sum = num1 + num2;
    return sum.toString();
};

//Above approach in one line. Same time and space complexity as above
var addStrings = function(num1, num2){
    return (BigInt(num1) + BigInt(num2)).toString();
}

//Without using any javascript features directly
//Time complexity O(Max(n, m)) where n is num1 length and m is num2 length; Space complexity is O(1)
var addStrings = function(num1, num2) {
    let carry = 0;
    let sum = "";
    let summation = 0;
    let l1 = num1.length;
    let l2 = num2.length;
    
    for(let i = l1-1, j = l2-1; i >=0  || j >= 0; i--, j--){
        summation = parseInt(num1[i] || 0) + parseInt(num2[j] || 0) + carry;
        carry = Math.floor(summation/10);
        sum = Math.floor(summation%10)+sum
    }
    if(carry !== 0){
        sum = carry + sum;
    }
    return sum;
}
