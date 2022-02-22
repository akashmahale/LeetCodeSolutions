/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    var res = 0;
    for (var i = 0, l = columnTitle.length; i < l; i++) {
        var num = columnTitle[i].charCodeAt() - 64;
        res += num * Math.pow(26, columnTitle.length - i - 1);
    }
    return res;
};