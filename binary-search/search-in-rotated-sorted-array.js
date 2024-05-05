const assert = require("../assert")

/**
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = (nums, target) => {
  let [left, right] = [0, nums.length - 1]

  while (left <= right) {
    const mid = (left + right) >> 1
    const guess = nums[mid]
    const leftNum = nums[left]
    const rightNum = nums[right]

    if (guess === target) return mid

    if (leftNum <= guess) {
      if (leftNum <= target && target < guess) right = mid - 1
      else left = mid + 1
    }

    if (guess < leftNum) {
      if (guess < target && target <= rightNum) left = mid + 1
      else right = mid - 1
    }
  }

  return -1
}

assert(search([4, 5, 6, 7, 0, 1, 2], 0), 4)
