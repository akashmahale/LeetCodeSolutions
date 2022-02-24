/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    n = n + ''
    for(let i = 0; i < n.length; i++){
        product *= parseInt(n[i])
        sum += parseInt(n[i])
    }
    
    return product - sum
};