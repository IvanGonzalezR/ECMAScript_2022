const promise = new Promise((resolve, reject) => {
  reject("Error jiji");
});
const promise2 = new Promise((resolve, reject) => {
  reject("Solved");
});
const promise3 = new Promise((resolve, reject) => {
  resolve("Resolved 3 ");
});

Promise.any([ promise, promise2, promise3 ])
  .then(response => console.log(response));
