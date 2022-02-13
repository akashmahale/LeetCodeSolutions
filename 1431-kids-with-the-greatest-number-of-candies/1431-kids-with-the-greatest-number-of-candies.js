/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    for(let i = 0; i < candies.length; i++){
        if(candies.every(d => candies[i] + extraCandies >= d)){
           result.push(true)
           } else {
               result.push(false)
           }
    }
    return result
}