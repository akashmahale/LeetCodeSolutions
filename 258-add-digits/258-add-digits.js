/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num == 0){
        return 0
    }
    
    let string = num + '';
    
    while(string.length != 1){
        let tempString = '0'
          for(let i = 0; i < string.length; i++){
              tempString = (parseInt(tempString) + parseInt(string[i])) + ''
          }
        string = tempString
    }
    
    return string
};