/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var compare = function (arr1, arr2) {
   for(let i =0; i < 256; i++){
       if (arr1[i] !== arr2[i])
           return false
   } 
    return true
}
var search = function (pat, txt) {
    let result = []
    var M = pat.length;
        var N = txt.length;
 
        // countP[]: Store count of all
        // characters of pattern
        // countTW[]: Store count of current
        // window of text
        var countP = new Array(256).fill(0);
        var countTW = new Array(256).fill(0);
        for (var i = 0; i < M; i++) {
          countP[pat[i].charCodeAt(0)]++;
          countTW[txt[i].charCodeAt(0)]++;
        }
 
        // Traverse through remaining
        // characters of pattern
        for (var i = M; i < N; i++) {
          // Compare counts of current window
          // of text with counts of pattern[]
          if (compare(countP, countTW)) {
            result.push(i - M)
          }
 
          // Add current character to
          // current window
          countTW[txt[i].charCodeAt(0)]++;
 
          // Remove the first character of
          // previous window
          countTW[txt[i - M].charCodeAt(0)]--;
        }
 
        // Check for the last window in text
        if (compare(countP, countTW)) {
          result.push(N - M)
        }
    return result
}


var findAnagrams = function(s, p) {
    if(p.length > s.length){
       return []
       }
   return search(p, s)
};