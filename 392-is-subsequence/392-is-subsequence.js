/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let newString = ''
    let x = 0
    for(let i = 0;i < t.length; i++){
        if(t[i] == s[x]){
            newString += t[i];
            x++
        }
    }
    return s == newString
};