//Question Link - https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
//Time complexity O(n) where n is the array length
//Space complexity O(1)

/**
 * @param {string[]} operations
 * @return {number}
 */

//Approach 1
var finalValueAfterOperations = function(operations) {
    let x = 0;
    operations.forEach(operation => {
        switch(operation){
            case '--X':
            case 'X--':
                x = x - 1;
                break;
            case 'X++':
            case '++X':
                x = x + 1;
                break;
            default:
                x = 0;
        }
    });
    return x;
};

//Approach 2
var finalValueAfterOperations = function(operations) {
    let X = 0;
    operations.forEach(op => {
        eval(op);
    });
    return X;
}

//Aapproach 3
var finalValueAfterOperations = function(operations) {
	let x = 0
	for(let i = 0; i < operations.length; i++) {
		operations[i][0] === "+" || operations[i][2] === "+" ? x++ : x--
	}
	return x;
};
