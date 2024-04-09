const assert = require("./assert")

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const multiplied = new Array(nums.length)

  let pre = 1
  for (let i = 0; i < nums.length; i++) {
    multiplied[i] = pre
    pre *= nums[i]
  }

  let post = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    multiplied[i] *= post
    post *= nums[i]
  }

  return multiplied
}

assert(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6])
