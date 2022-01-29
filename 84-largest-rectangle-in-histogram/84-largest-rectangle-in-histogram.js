/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if (heights.length == 0) {
        return 0
    }
    if (heights.length == 1) {
        return heights[0]
    }

    let max = 0
    let stack = []
    stack.push(0)
    for (var i = 1; i < heights.length; i++) {
        let curr = heights[i];
        if (curr >= heights[stack[stack.length - 1]]) {
            stack.push(i)
        } else {
            while (stack.length && curr < heights[stack[stack.length - 1]]) {
                let temp = heights[stack[stack.length - 1]]
                stack.pop()
                if (stack.length == 0) {
                    max = Math.max(max, temp * i)
                } else {
                    max = Math.max(max, temp * (i - stack[stack.length - 1] - 1))
                }
            }
            stack.push(i)
        }
    }
    if (stack.length > 0) {
        i = heights.length
            while (stack.length) {
                let temp = heights[stack[stack.length - 1]]
                stack.pop()
                if (stack.length == 0) {
                    max = Math.max(max, temp * i)
                } else {
                    max = Math.max(max, temp * (i - stack[stack.length - 1] - 1))
                }
            }
        }

    return max
};