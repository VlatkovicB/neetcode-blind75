const assert = require("../assert")

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const splitStr = s.split("")

  const complementary = {
    ")": "(",
    "}": "{",
    "]": "[",
  }

  const stack = []
  for (let i = 0; i < splitStr.length; i++) {
    const current = splitStr[i]
    if (
      stack.length > 0 &&
      stack[stack.length - 1] === complementary[current]
    ) {
      stack.pop()
    } else {
      stack.push(splitStr[i])
    }
  }

  return stack.length === 0
}

assert(isValid("()"), true)
