//Question Link- https://leetcode.com/problems/goal-parser-interpretation/
//Time complexity O(n) where n is string length
//Space complexity O(1)

/**
 * @param {string} command
 * @return {string}
 */

var interpret = function(command) {
    let res = "";
    for(let i = 0; i < command.length; i++){
        if(command[i] === 'G'){
            res += 'G';
        }else if(command[i] === '('){
            if(command[i+1] === ')'){
                res += 'o';
            }else{
                res += 'al';
            }
        }
    }
    return res;
};

var interpret = function(command) {
    let res = command.replaceAll('()', 'o').replaceAll('(al)', 'al');
    return res;
}
