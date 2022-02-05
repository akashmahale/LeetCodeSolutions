/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var merge = function (arr1, arr2){
    if(arr1 == null) return arr2
    if(arr2 == null) return arr1
    
    if(arr1.val < arr2.val){
        arr1.next = merge(arr1.next, arr2 )   
        return arr1
    } else {
        arr2.next = merge(arr2.next, arr1 )   
        return arr2
    }

}
var mergeKLists = function(lists) {
    if (!lists.length) return null;
    
    for(let i = 1; i < lists.length; i++){
        lists[0] = merge(lists[0], lists[i])
    }
    
    return lists[0]
};