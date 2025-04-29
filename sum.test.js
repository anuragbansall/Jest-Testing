const sum = require("./sum.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 0 + 0 to equal 0", () => {
  expect(sum(0, 0)).toBe(0);
});

test("adds -1 + 1 to equal 0", () => {
  expect(sum(-1, 1)).toBe(0);
});

// test() is a global function provided by Jest used to define a test case.
// It takes two arguments: a string that describes the test and a function that contains the test logic.
// expect() is a global function provided by Jest used to create an assertion.
// It takes a value as an argument and returns an object with methods that can be used to make assertions about that value.
// toBe() is a matcher provided by Jest that checks if the value is strictly equal to the expected value.
// It uses the strict equality operator (===) to compare the values.
// In this case, we are checking if the result of the sum function is equal to the expected value.
// If the assertion fails, Jest will report the test as failed and provide information about the failure.
