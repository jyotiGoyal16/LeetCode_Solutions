//Question link - https://leetcode.com/problems/count-items-matching-a-rule/
//Time complexity O(n) to traverse the array
//Space complexity O(1)

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

//using if-else
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for(let item of items){
        if(ruleKey === 'type' && ruleValue === item[0]){
            count++;
        }else if(ruleKey === 'color' && ruleValue === item[1]){
            count++;
        }
        else if(ruleKey === 'name' && ruleValue === item[2]){
            count++;
        }
    }
    return count;
};

//using object and array methods
var countMatches = function(items, ruleKey, ruleValue) {
    let rules = {
        'type': 0,
        'color': 1,
        'name': 2
    }
    let index = rules[ruleKey];
    let matchingRules = items.filter(item => item[index] === ruleValue);
    return matchingRules.length;
}

//using array methods
var countMatches = function(items, ruleKey, ruleValue) {
    let rules = ['type', 'color', 'name'];
    let index = rules.indexOf(ruleKey);
    
    return items.map(c => c[index] === ruleValue).filter(c => c).length;
}
