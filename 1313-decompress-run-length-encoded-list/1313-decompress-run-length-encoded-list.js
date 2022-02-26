/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = []
    
    for(let i = 0; i< nums.length; i = i+2){
        let tempArr = []
        for(let j = 0; j < nums[i]; j++){
            tempArr.push(nums[i+1])
        }
        result = result.concat(tempArr)
    }
    
    return result
};