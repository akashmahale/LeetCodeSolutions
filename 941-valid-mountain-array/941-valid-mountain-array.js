/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3){
        return false
    }
    
    let mB = 0
    
    for(let i = 1; i<arr.length; i++){
        if((arr[i - 1] >= arr[i])){
            mB = i - 1
            break;
        }
    }
    if(mB == 0){
       return false
    }
    let answer = false;
    for(let i = 1; i < mB + 1; i++){
        if((arr[i - 1] < arr[i])){
            answer = true  
        } else {
            return false
        }
    }
    for(let i = mB + 1; i< arr.length; i++){
        if((arr[i - 1] > arr[i])){
            answer = true  
        } else {
            return false
        }
    }
    
    return answer
};