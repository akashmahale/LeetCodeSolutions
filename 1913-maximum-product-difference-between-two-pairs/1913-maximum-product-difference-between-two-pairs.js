/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums = nums.sort((b, a) => b - a)
    let arrLength = nums.length
    return (nums[arrLength - 1] * nums[arrLength - 2]) - (nums[0] * nums[1])
};