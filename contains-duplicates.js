const assert = require("./assert")

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length
}

assert(containsDuplicate([1, 2, 3, 1]), true)
assert(containsDuplicate([1, 2, 3, 4]), false)
