/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//Question Link - https://leetcode.com/problems/add-binary/
/*
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 0 (carry 1)
*/

//Time complexity O(max(n, m)) where n and m are length of string a and b respectively
//space complexity is O(1) as constant space is used for binary data map
var addBinary = function(a, b) {
    let resMap = {
        "00" : 0,
        "01": 1,
        "10": 1,
        "11": 10,
        "100": 10,
        "101": 11
    }
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    let sum = 0;
    let res = "";
    
    while(i >= 0 || j >= 0){
        let valA = a[i] ? a[i] : "0";
        let valB = b[j] ? b[j] : "0";
        let sumValue = resMap[valA + valB];
        sum = resMap[`${sumValue}` + `${carry}`]; 
        carry = Math.floor(sum / 10);
        res = (sum%10) + res;
        i--;
        j--;
    }
    if(carry === 1){
        res = carry + res;
    }
    return res;
    
};

//Time complexity is O(n) as time complexity of toString is O(n), otherwise it's O(1)
//space complextis O(1)
var addBinary = function(a, b) {
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
}
