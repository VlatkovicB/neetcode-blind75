/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const assert = require("../assert")
const { constructTree } = require("./utils")

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null || root.value === null) return 0

  return deep(root)
}

const deep = (head) => {
  const left = maxDepth(head.left)
  const right = maxDepth(head.right)

  let height = Math.max(left, right)

  return height + 1
}

assert(maxDepth(constructTree([3, 9, 20, null, null, 15, 7])), 3)
assert(maxDepth(constructTree([1, null, 2])), 2)
