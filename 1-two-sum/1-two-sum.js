/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let value = []
    for(let i=0; i<nums.length - 1; i++){
        for(let j=1; j<nums.length; j++){
            if(nums[i]+ nums[j] === target && i < j){
               value[0] == null ? value[0] = i : null
               value[1] == null ? value[1] = j : null
            }
        }
    }
    return value
};
