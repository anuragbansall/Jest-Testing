const fetchData = require("../utils/callback");

test("fetchData returns correct data", (done) => {
  function callback(data) {
    try {
      expect(data).toEqual({ name: "John Doe", age: 30 });
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
