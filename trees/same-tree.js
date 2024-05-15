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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!(p || q)) return true

  if (!(p && q)) return false

  if (p.val !== q.val) return false

  return dfs(p, q)
}

const dfs = (p, q) => {
  const left = isSameTree(p.left, q.left)
  const right = isSameTree(p.right, q.right)

  return left && right
}

assert(isSameTree(constructTree([1, 2, 3]), constructTree([1, 2, 3])), true)
