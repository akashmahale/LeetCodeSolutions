/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_SAFE_INTEGER
    let max = 0
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min){
           min = prices[i]
           } else {
               max = Math.max(max, prices[i] - min)
           }
    }
       
    return max
};