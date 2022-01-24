/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

    let j = 0
    for(let i=0; i< word.length;i++){
        if(/[A-Z]/.test(word[i])){
           j++
        }
    }
    
    if(j == 1 && /[A-Z]/.test(word[0]) || j == 0 || j == word.length){
        return true   
    }
    
    return false
};