/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map();
    
    for(let i of nums1){
        for(let j of nums2){
            let sum = i+j
            map.set(-sum, (map.has(-sum) ? map.get(-sum) : 0) + 1)
        }
    }
    let count = 0
    for(let k of nums3){
        for(let l of nums4){
            let sum = k+l
            count += map.has(sum) ? map.get(sum) : 0
        }
    }
    
    return count
};