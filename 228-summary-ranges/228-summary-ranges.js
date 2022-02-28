/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [] 
    let tempArr = [nums[0]]
    
    for(let i = 1; i < nums.length + 1; i++){
        if(tempArr[tempArr.length - 1] == nums[i] - 1){
            tempArr.push(nums[i])
        } else {
            if(tempArr[0] == tempArr[tempArr.length - 1]){
               result.push(tempArr[0].toString())
               } else {
                result.push(tempArr[0] + '->' +  tempArr[tempArr.length - 1])
            }
            
            tempArr = [nums[i]]
        }      
    }
    return result
};