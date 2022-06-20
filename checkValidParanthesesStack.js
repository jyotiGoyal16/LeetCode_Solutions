/**
 * @param {string} s
 * @return {boolean}
 */

// Time complexity O(n) and space complexity O(n)
var isValid = function(s) {
    let stack = [];
    let poppedElement = "";
    let str = [...s];
    
    if(str.length === 1 || (str[0] === ")" || str[0] === "}" || str[0] === "]")){
        return false;
    }
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === '(' || str[i] === "{" || str[i] === "["){
            stack.push(str[i]);
        }else{
            poppedElement = stack.pop();
            if(!poppedElement){
                return false;
            }
            switch(str[i]){
                case ")":
                    if(poppedElement === '{' || poppedElement === "[")
                        return false;
                break;
                case "}":
                    if(poppedElement === '(' || poppedElement === "[")
                        return false;
                break;
                case "]":
                    if(poppedElement === '{' || poppedElement === "(")
                        return false;
                break;
            }
        }
    }
    
    if(stack.length > 0)
        return false;
    else
        return true;
};
