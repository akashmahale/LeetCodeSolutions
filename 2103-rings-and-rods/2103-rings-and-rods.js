/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let obj = {}
    for(let i = 1; i < rings.length; i = i + 2){
        let x = rings[i-1]
        obj[rings[i]] ? obj[rings[i]][rings[i-1]] ? obj[rings[i]][rings[i-1]]++ : obj[rings[i]][rings[i-1]] = 1 : obj[rings[i]] =          { [x] : 1}
    }
   return Object.values(obj).reduce((c,a) => Object.values(a).length > 2 ? c + 1 : c , 0)
    
};