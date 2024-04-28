const assert = require("../assert")

/**
 * @param {number[]} nums
 * Time O(log(N)) | Space O(1)
 * @return {number}
 */
var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1]

  while (left < right) {
    const mid = (left + right) >> 1
    const guess = nums[mid]
    const leftNum = nums[left]
    const rightNum = nums[right]

    if (leftNum < rightNum) return leftNum

    if (leftNum <= guess) left = mid + 1

    if (guess < leftNum) right = mid
  }

  return nums[left]
}

assert(findMin([3, 4, 5, 1, 2]), 1)
assert(findMin([4, 5, 6, 7, 0, 1, 2]), 0)
