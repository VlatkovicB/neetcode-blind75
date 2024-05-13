class TreeNode {
  constructor(value, left, right) {
    this.value = value === undefined ? 0 : value
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const constructTree = (arr = []) => {
  const tree = new TreeNode(arr.shift())
  const queue = []
  let construct = tree

  while (arr.length) {
    const node = new TreeNode(arr.shift())
    queue.push(node)

    if (!construct.left) {
      construct.left = node
      continue
    }
    if (!construct.right) {
      construct.right = node
    }

    construct = queue.shift()
  }

  return tree
}

const deconstructTree = (tree = new TreeNode()) => {
  const arr = []
  const queue = []
  let head = tree

  while (head) {
    arr.push(head.value)
    queue.push(head.left)
    queue.push(head.right)

    head = queue.shift()
  }

  return arr
}

module.exports = {
  TreeNode,
  constructTree,
  deconstructTree,
}
