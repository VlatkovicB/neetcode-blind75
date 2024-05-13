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

module.exports = {
  Node,
  constructHead,
}
