/**
 * @param {number} n
 * @return {number}
 */
let totalMatches = 0
var numberOfMatches = function(n) {
    if(n < 2) {
        let result = totalMatches
        totalMatches = 0
        return result
    }
    if(n % 2 == 0){
        totalMatches += n/2
        return numberOfMatches(n/2)   

    } else {
        totalMatches += (n - 1)/2
        return numberOfMatches(((n - 1)/2) + 1)   
    }
};