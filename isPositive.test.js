const isPositive = require("./isPositive");

describe("isPositive function", () => {
  test("should return true for positive numbers", () => {
    expect(isPositive(5)).toBeTruthy();
    expect(isPositive(0.1)).toBeTruthy();
    expect(isPositive(100)).toBeTruthy();
  });

  test("should return false for negative numbers", () => {
    expect(isPositive(-5)).toBeFalsy();
    expect(isPositive(-0.1)).toBeFalsy();
    expect(isPositive(-100)).toBeFalsy();
  });
});

// describe() is a global function provided by Jest used to group related tests together. It takes two arguments: a string that describes the group and a function that contains the test cases.
// .toBeTruthy() is a matcher provided by Jest that checks if the value is truthy. It is used to assert that a value is considered true in a boolean context. In this case, we are checking if the result of the isPositive function is truthy for positive numbers.
// .toBeFalsy() is a matcher provided by Jest that checks if the value is falsy. It is used to assert that a value is considered false in a boolean context. In this case, we are checking if the result of the isPositive function is falsy for negative numbers.