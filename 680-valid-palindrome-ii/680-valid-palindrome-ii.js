var validPalindrome = function(s) {
    
    let l = 0;
    let r = s.length -1;
    
    
    while (r >= l){
            if (s[l] !== s[r]){
                 return validPal(s, l+1, r) || validPal(s, l, r-1);
            };
           r--;
           l++;
        }
    
    return true;
};


var validPal = function(s, l, r){

        
     while (r >= l){
            if (s[l] !== s[r]){
                return false;
            };
           r--;
           l++;
        }
    return true;
};