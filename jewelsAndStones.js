//Question link - https://leetcode.com/problems/jewels-and-stones/
//Time complexity O(n) where n is the length of bigger array
//Space complexity O(m) where m is the length of smaller array or the map we created

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var numJewelsInStones = function(jewels, stones) {
    let newJewels = jewels.split('');
    let count = 0;
    stones.split('').forEach(st => {
        if(newJewels.includes(st)) count++;
    });
    return count;
};

var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    let count = 0;
    
    for(let i of jewels){
        map.set(i, 1);
    }
    for(let j of stones){
        if(map.has(j)) count++;
    }
    
    return count;
}
