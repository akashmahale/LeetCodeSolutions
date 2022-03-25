/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let result = 0
    for(let i = 0; i < words.length; i++){
        let includes = true
       for(let j = 0; j < words[i].length; j++){
          includes = includes && allowed.includes(words[i][j])
       }
        if(includes){
            result++
           }
    }
    return result
};