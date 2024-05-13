/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const assert = require("../assert")
const { constructTree, deconstructTree } = require("./utils")

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = (root) => {
  const isBaseCase = root === null
  if (isBaseCase) return root

  return depthFirstSearch(root)
}

const depthFirstSearch = (root) => {
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}

assert(
  deconstructTree(invertTree(constructTree([4, 2, 7, 1, 3, 6, 9]))),
  [4, 7, 2, 9, 6, 3, 1]
)
