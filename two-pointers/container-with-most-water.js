const assert = require("../assert")

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  for (let left = 0, right = height.length - 1; left < right; ) {
    const leftNumber = height[left]
    const rightNumber = height[right]

    max = Math.max(max, Math.min(leftNumber, rightNumber) * (right - left))
    if (leftNumber <= rightNumber) {
      left++
    } else {
      right--
    }
    console.log(max)
  }
  return max
}

assert(maxArea([1, 1]), 1)
assert(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)
