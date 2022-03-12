/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function(arr) {
    let total = 0;
    let n =  arr.length;

    for(let wsize = 1; wsize<=n; wsize+=2){
        for(let i=0; i+wsize <=n; i+=1 ){
            for(let j=i; j < i+wsize; j+=1){
                total+=arr[j];
            }
        }
    }
    return total;
};