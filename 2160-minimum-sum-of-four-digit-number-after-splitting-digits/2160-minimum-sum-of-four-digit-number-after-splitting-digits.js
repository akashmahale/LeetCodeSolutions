/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {

    num = (num + "").split("").sort((a, b) => a - b)
    
    return parseInt(num[0] + "" + num[3]) + parseInt(num[1] + "" + num[2])
};