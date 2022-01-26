function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let finalArray = []
    loop = function(val) {
        if(val == null){
           return
        }
        let arr = Object.values(val)
        TreeNode(val['val'], val['left'], val['right'])
        for (let i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) == 'number') {
                finalArray.push(arr[i])
            } else {
                if(arr[i] != null){
                    loop(arr[i])
                   }
                
            }
        }
    }

    loop(root1)
    loop(root2)

    return finalArray.sort((b,a)=> b-a)
    // return root1.concat(root2).filter(d => d != null).sort()
};