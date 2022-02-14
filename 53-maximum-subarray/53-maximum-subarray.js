/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length == 1) return nums[0];
    let sum = nums[0];
    let sumN = nums[0]
    
    for(let i=1; i < nums.length; i++){
        sumN = Math.max(nums[i] + sumN, nums[i])
        sum = Math.max(sum, sumN)
    }
    
    return sum
};