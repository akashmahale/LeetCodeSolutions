/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let result = 0
    let numsSet = [...new Set(nums)]

    if (k == 0) {
        for (num of numsSet) {
            if (nums.filter(n => n == num).length > 1) {
                result++
            }
        }
    }
    if (k > 0) {
        for (num of numsSet) {
            if (numsSet.includes(num + k)) {
                result++
            }
        }
    }


    return result
};