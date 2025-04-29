const fetchPromise = (isError = false) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (isError) {
        rej(new Error("error"));
      } else {
        res("hello world");
      }
    }, 1000);
  });
};

module.exports = fetchPromise;
