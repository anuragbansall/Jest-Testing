const fetchPromise = require("../utils/promise");

describe("promise", () => {
  test("fetchPromise returns 'hello world'", () => {
    return expect(fetchPromise(false)).resolves.toBe("hello world");
    // resolves() is a matcher that allows you to test the resolved value of a promise.
    // return is important here because it ensures that the test waits for the promise to resolve before finishing.
  });

  test("fetchPromise fails with an error", () => {
    return expect(fetchPromise(true)).rejects.toThrow("error");
    // rejects() is a matcher that allows you to test the rejected value of a promise.
  });

  // With async/await
  test("fetchPromise returns 'hello world' with async/await", async () => {
    const result = await fetchPromise(false);
    expect(result).toBe("hello world");
  });
});
