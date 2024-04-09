const assert = require("../assert")

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {}

  for (let i = 0; i < strs.length; i++) {
    const current = strs[i]
    const sorted = current.split("").sort().join("")
    if (map[sorted]) {
      map[sorted].push(current)
    } else {
      map[sorted] = [current]
    }
  }

  return Object.values(map)
}

assert(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
  ["bat"],
  ["nat", "tan"],
  ["ate", "eat", "tea"],
])
assert(groupAnagrams([""]), [[""]])
assert(groupAnagrams(["a"]), [["a"]])
