/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numMap = new Map()
    let max = nums[0]
    for(let i = 0; i < nums.length; i++){
        if(numMap.has(nums[i])){
           numMap.set(nums[i], numMap.get(nums[i]) + 1 )
        } else {
            numMap.set(nums[i], 1 )
        }
    }
    return [...numMap].reduce((c, a) => a[1] > c[1] ? a : c)[0]
};