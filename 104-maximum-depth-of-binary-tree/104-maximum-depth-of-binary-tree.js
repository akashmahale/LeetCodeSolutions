/**
 * Definition for a binary tree node.
 * 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
 
var maxDepth = function(root) {
    if(root == null) return 0
    console.log(root.left)
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};