/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let lcount = 0
  let rcount = 0
  let stringCount = 0
  for(let i = 0; i < s.length; i++){
    if(s[i]=="L"){
        lcount++
    }
    if(s[i]=="R"){
        rcount++
    }
    if(lcount == rcount && lcount != 0){
        stringCount++
        lcount = 0
        rcount = 0
    }
  }
    return stringCount
};