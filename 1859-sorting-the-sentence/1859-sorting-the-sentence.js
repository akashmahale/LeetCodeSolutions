/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let sortedArray = []
    s=s.split(" ")
    for(let i = 0; i < s.length; i++){
        sortedArray[s[i].substring(s[i].length - 1, s[i].length) - 1] = s[i].substring(0, s[i].length - 1);
    }
    return sortedArray.toString().replace(/,/g," ")
};