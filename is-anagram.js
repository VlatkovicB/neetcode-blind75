const assert = require("./assert")

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("")
}

assert(isAnagram("anagram", "nagaram"), true)
