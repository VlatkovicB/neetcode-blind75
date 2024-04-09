const assert = require("../assert")

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const t = s.matchAll(/[a-zA-Z0-9]+/g)
  let str = ""

  for (const q of t) {
    str += q
  }
  str = str.toLowerCase()

  return str === str.split("").reverse().join("")
}

assert(isPalindrome("A man, a plan, a canal: Panama"), true)
assert(isPalindrome("ab_a"), true)
