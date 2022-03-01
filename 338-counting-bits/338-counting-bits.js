/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    
    let bitArray = []
    for(let i = 0; i < n + 1; i++){
        bitArray.push([...i.toString(2)].reduce((c, a) => parseInt(c) + parseInt(a) ,'0'))
    }
    return bitArray
};