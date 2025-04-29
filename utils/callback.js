const fetchData = (callback) => {
  setTimeout(() => {
    const data = { name: "John Doe", age: 30 };
    callback(data);
  }, 1000);
};

module.exports = fetchData;
