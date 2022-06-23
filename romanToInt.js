/**
 * @param {string} s
 * @return {number}
 */

//Question - https://leetcode.com/problems/roman-to-integer/
//traversing from end. 
//Time complexity is O(n) and space complexity is O(1) if we avoid the roman numeral map since it will be constant length always
var romanToInt = function(s) {
    let romanNumeralMap = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }
    
    let number = 0;
    let i = s.length - 1;
    
    while(i >= 0){
        if(s[i] === 'V' && s[i-1] === 'I'){
            number += romanNumeralMap['IV'];
             i = i-2;
        }else if(s[i] === 'X' && s[i-1] === 'I'){
            number += romanNumeralMap['IX'];
            i = i-2;
        }
        else if(s[i] === 'L' && s[i-1] === 'X'){
            number += romanNumeralMap['XL'];
            i = i-2;
        }
        else if(s[i] === 'C' && s[i-1] === 'X'){
            number += romanNumeralMap['XC'];
            i = i-2;
        }
        else if(s[i] === 'D' && s[i-1] === 'C'){
            number += romanNumeralMap['CD'];
            i = i-2;
        }
        else if(s[i] === 'M' && s[i-1] === 'C'){
            number += romanNumeralMap['CM'];
            i = i-2;
        }else{
            number += romanNumeralMap[s[i]];
            i = i-1;
        }
    }
    return number;
};


//Another approach - traversing from starting
//Time complexity is O(n) and space complexity is O(1) if we avoid the roman numeral map since it will be constant length always
var romanToInt = function(s) {
    let romanNumeralMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let i = 0;
    let number = 0;
    while(i < s.length){
        if(i+1 === s.length){
            number += romanNumeralMap[s[i]];
            i++;
        }else if(romanNumeralMap[s[i]] >= romanNumeralMap[s[i+1]]){
            number += romanNumeralMap[s[i]];
            i++;
        }else{
            number += romanNumeralMap[s[i+1]] - romanNumeralMap[s[i]];
            i += 2;
        }
    }
    
    return number;
    
}
