const assert = require("./assert")

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i]
    if (map[number] !== undefined) {
      return [map[number], i]
    }
    map[target - number] = i
  }

  return []
}

assert(twoSum([2, 7, 11, 15], 9), [0, 1])
