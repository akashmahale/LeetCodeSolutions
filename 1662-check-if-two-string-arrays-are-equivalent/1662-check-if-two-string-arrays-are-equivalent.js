/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    return word1.reduce((c, a) => c + a) == word2.reduce((c, a) => c + a)
};