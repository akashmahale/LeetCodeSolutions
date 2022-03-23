/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            result = Math.max((nums[i] - 1) * (nums[j] - 1), result)
        }
    }
    return result
};