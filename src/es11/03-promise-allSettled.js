const promise = new Promise((resolve, reject) => {
  resolve("Error jiji");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("Solved");
});
const promise3 = new Promise((resolve, reject) => {
  resolve("Resolved 3 ");
});

// Promise.all([ promise, promise2, promise3 ])
//   .then(response => console.log(response))
//   .catch(response => console.log(response))
Promise.allSettled([ promise, promise2, promise3 ])
  .then(response => console.log(response));
