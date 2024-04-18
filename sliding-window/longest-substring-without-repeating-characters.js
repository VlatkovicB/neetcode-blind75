const assert = require("../assert")

/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let left = 0
  let right = 1
  let max = 0

  while (right <= str.length) {
    const strToCompare = str.slice(left, right)
    const set = new Set(strToCompare.split(""))
    if (set.size !== strToCompare.length) {
      left++
    } else {
      max = Math.max(set.size, max)
    }

    right++
  }
  return max
}

assert(lengthOfLongestSubstring("abcabcbb"), 3)
assert(lengthOfLongestSubstring("bbbbb"), 1)
assert(lengthOfLongestSubstring("pwwkew"), 3)
assert(lengthOfLongestSubstring(" "), 1)
assert(lengthOfLongestSubstring(""), 0)
