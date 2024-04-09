const assert = require("./assert")

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const s = new Set(nums)

  if (s.size === 1) return 1
  if (s.size === 0) return 0

  const addNext = (number, longest) => {
    const next = number + 1
    longest.add(number)
    if (s.delete(next)) {
      longest.add(next)
      addNext(next, longest)
    }

    return longest
  }

  let result = 1

  for (const number of s) {
    const longest = new Set()
    if (!s.has(number - 1)) {
      addNext(number, longest)
    }

    if (!s.has(number + 1) && !longest.has(number + 1)) {
      longest.delete(number)
    }

    if (result < longest.size) result = longest.size
  }

  return result
}

assert(longestConsecutive([100, 4, 200, 1, 3, 2]), 4)
assert(longestConsecutive([0]), 1)
assert(longestConsecutive([0, 0]), 1)
assert(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]), 7)
assert(longestConsecutive([-6, -1, -1, 9, -8, -6, -6, 4, 4, -3, -8, -1]), 1)
