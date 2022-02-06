/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = []
    let half = n
    arr.push(nums[0])
    arr.push(nums[half])

    for(let i = 1; i < half; i++){
        arr.push(nums[i])
        arr.push(nums[half + i])
    }
    
    return arr
    
};