function resolveAfterOneMinute() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 1 minute");
    }, 60000);
  });
}

resolveAfterOneMinute()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
