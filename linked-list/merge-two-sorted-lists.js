/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const assert = require("../assert")
const { constructHead, Node } = require("./node-construct")

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new Node(0)

  while (list1 && list2) {
    const isList1Greater = list2.val < list1.val
    const isList2Greater = list1.val <= list2.val

    if (isList2Greater) {
      head.next = list1
      list1 = list1.next
    }

    if (isList1Greater) {
      head.next = list2
      list2 = list2.next
    }
  }

  head.next = list1 || list2

  return head.next
}

const printLinkedList = (list) => {
  const arr = []

  while (list.next) {
    arr.push(list.value)
    list = list.next
  }

  return arr
}

assert(
  printLinkedList(
    mergeTwoLists(constructHead([1, 2, 4]), constructHead([1, 3, 4]))
  ),
  [1, 1, 2, 3, 4, 4]
)
