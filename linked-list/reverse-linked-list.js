/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const assert = require("../assert")

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [previous, current, next] = [null, head, null]

  while (current) {
    next = current.next
    current.next = previous

    previous = current
    current = next
  }

  return previous
}

// assert(reverseList(constructHead([1, 2, 3, 4, 5])), [5, 4, 3, 2, 1])
