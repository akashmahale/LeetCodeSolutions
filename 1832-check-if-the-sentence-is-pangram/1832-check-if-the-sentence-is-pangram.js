/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let result = []
    for(let i = 0; i < sentence.length; i++){
        if(!result.includes(sentence[i])){
           result.push(sentence[i])
        }
    }
    
    return result.length >= 26
};