const assert = require("../assert")

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0

  for (let left = 0, right = 1; right < prices.length; ) {
    const leftPrice = prices[left]
    const rightPrice = prices[right]
    if (leftPrice < rightPrice) {
      max = Math.max(rightPrice - leftPrice, max)
    } else {
      left = right
    }
    right++
  }

  return max
}

assert(maxProfit([7, 1, 5, 3, 6, 4]), 5)
assert(maxProfit([2, 1, 4]), 3)
