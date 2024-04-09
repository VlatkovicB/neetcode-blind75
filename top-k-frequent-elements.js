const assert = require("./assert")

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]

    if (map[current] !== undefined) {
      map[current] += 1
    } else {
      map[current] = 1
    }
  }

  const sorted = Object.entries(map).sort((a, b) => b[1] - a[1])

  const result = []
  for (let i = 0; i < k; i++) {
    result.push(Number(sorted[i][0]))
  }

  return result
}

assert(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2])
assert(topKFrequent([1], 1), [1])
assert(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2), [2, -1])
