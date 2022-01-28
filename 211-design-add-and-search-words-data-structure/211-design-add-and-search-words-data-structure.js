const alphabetACode = 'a'.charCodeAt(0);

const getIndex = (char) => {
    let charCo = char.charCodeAt(0);
    return charCo - alphabetACode;
}

var WordDictionary = function() {
    this.alphabets = new Array(26).fill(null);
    this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this;
    for(let i = 0;i <word.length ; i++){
        let char = word[i];
        let indexChar = getIndex(char);
        if(node.alphabets[indexChar]){
           node = node.alphabets[indexChar]; 
        } else {
            node.alphabets[indexChar] = new WordDictionary();
            node = node.alphabets[indexChar];
        }
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */

const searchUtil = function(node, word, i){
    if(i == word.length){
        if(node.isEnd)
        return true; 
        else {
            return false;
        }
    }
    let alphabets = node.alphabets;
    let char = word[i];
    if(char === '.'){
        for(let j=0;j<alphabets.length;j++){
            if(alphabets[j]){
                let ans =  searchUtil(alphabets[j], word, i+1);
                if(ans){
                    return true;
                } else {
                    continue;
                }
            }
        }
    } else {
        if(alphabets[getIndex(char)]){
            node = alphabets[getIndex(char)];
            return searchUtil(node, word, i+1);
        }
    }
    return false;
}

WordDictionary.prototype.search = function(word) {
     let node = this;
     return searchUtil(node, word, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */