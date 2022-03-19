/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {number}
 */
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
var getDecimalValue = function(head) {
    if(head.next == null) return parseInt(head.val, 2)
    let num = head.val.toString() + "" + head.next.val.toString()
    return getDecimalValue(new ListNode(num, head.next.next))
};