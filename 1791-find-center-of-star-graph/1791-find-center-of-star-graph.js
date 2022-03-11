/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let x = {}
    for(let i=0; i<edges.length; i++){
        !x[edges[i][0]] ? x[edges[i][0]] = 1 : x[edges[i][0]]++
        !x[edges[i][1]] ? x[edges[i][1]] = 1 : x[edges[i][1]]++
    }
    console.log(Object.entries(x))
    return parseInt(Object.entries(x).sort((c, a) => a[1] - c[1])[0][0])
};