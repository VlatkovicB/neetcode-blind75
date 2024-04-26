const assert = require("../assert")

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const charsToFind = t.split("")
  const checkChars = (str) =>
    str
      .split("")
      .map((a) => charsToFind.includes(a))
      .filter((a) => a).length >= charsToFind.length

  let res = ""
  for (
    let left = 0, right = t.length - 1;
    left + t.length <= s.length && right <= s.length;

  ) {
    const strToLookIn = s.slice(left, right)

    if (checkChars(strToLookIn)) {
      if (strToLookIn.length < res.length || res.length === 0) {
        res = strToLookIn
      }
      left++
    } else {
      right++
    }
  }

  console.log(res)
  return res
}

assert(minWindow("ADOBECODEBANC", "ABC"), "BANC")
assert(minWindow("cabwefgewcwaefgcf", "cae"), "cwae")
assert(minWindow("a", "a"), "a")
assert(minWindow("aa", "aa"), "aa")
assert(minWindow("bba", "ab"), "ba")
