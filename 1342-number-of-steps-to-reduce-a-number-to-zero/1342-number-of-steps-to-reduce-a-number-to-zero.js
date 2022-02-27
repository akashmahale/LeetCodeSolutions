/**
 * @param {number} num
 * @return {number}
 */
let steps = 0
var isOdd = function(num) { return num % 2;}

var numberOfSteps = function(num) {
    console.log(steps, num)
    if(num == 0) {
        num = steps
        steps = 0
        return num
    }
    if(isOdd(num)){
        num = num - 1
    } else {
        num = num / 2
    }
    steps++
    return numberOfSteps(num)
};