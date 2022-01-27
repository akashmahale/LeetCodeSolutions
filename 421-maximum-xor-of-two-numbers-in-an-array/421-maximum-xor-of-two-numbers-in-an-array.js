/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {

    let mask = 0;
    let max = 0

    var se = new Set()

    for (let i = 30; i >= 0; i--) {
        mask |= (1 << i)
        for (let j = 0; j < nums.length; ++j) {
            se.add(nums[j] & mask)
        }
        let newMax = max | (1 << i);
        for (let pre of se.keys()) {
            if (se.has(newMax ^ pre)) {
                max = newMax;
                break
            }
        }
        se.clear()

    }
    return max
};