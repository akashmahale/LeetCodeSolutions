/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = []
    for(let i = 0; i < index.length; i++){
        if(typeof(target[index[i]]) !== 'number'){
            target[index[i]] = nums[i]
        } else {
            let temp1 = target.slice(0, index[i])
            let temp2 = target.slice(index[i], target.length)
            temp1.push(nums[i])
            target = temp1.concat(temp2)
        }
    }
    return target
};