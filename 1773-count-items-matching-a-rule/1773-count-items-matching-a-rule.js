/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let result = []
    let j = 0
    if(ruleKey == 'color'){
        j = 1
    } else if (ruleKey == 'name'){
        j = 2
    }
    for(let i = 0; i < items.length; i++){
            if(items[i][j] == ruleValue){
                result.push(items[i])
            }
    }
    return result.length
};