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

class Node {
  value
  next

  /**
   * @param {number} value
   * @param {Node} [next=null]
   */
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  /**
   * @param {Node} node
   */
  set next(node) {
    this.next = node
  }
}

const constructHead = (list = []) => {
  list.reverse()
  const head = new Node(list.pop())
  let current = head

  while (list.length) {
    current.next = new Node(list.pop())
    current = current.next
  }

  return head
}

// assert(reverseList(constructHead([1, 2, 3, 4, 5])), [5, 4, 3, 2, 1])
