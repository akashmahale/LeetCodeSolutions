/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
numsRev = function (arr, start, end){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}


var rotate = function(nums, k) {

    k = k % nums.length
    
    nums.reverse()
    numsRev(nums, 0, k - 1)
    numsRev(nums, k, nums.length - 1)
};

