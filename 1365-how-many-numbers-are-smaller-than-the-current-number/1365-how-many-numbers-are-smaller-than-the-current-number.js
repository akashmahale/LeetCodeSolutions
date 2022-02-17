/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let smaller = []
    for(let i = 0; i < nums.length; i++){
        let small = 0
        for(let j = 0; j < nums.length; j++){
            if(nums[i] > nums[j]){
                small++;
               }
        }
        smaller.push(small)
    }
    return smaller
};