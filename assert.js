const assert = require("assert")

module.exports = (actual, expected) => {
  try {
    assert.equal(actual, expected)
  } catch (error) {
    console.log(`Assertion failed: ${error.message}`)
  }
}
