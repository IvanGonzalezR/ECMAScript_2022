const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => {
        resolve('Async');
      }, 1000)
      : reject('Error');
  });
};

// sin Async await
// const anotherFn = () => {
//   const response = fnAsync();
//   response.then(data =>
//     console.log(data)
//   ).catch(data => {
//     console.log(data);
//   })
// };

// con Async Await
const anotherFn = async () => {
  try {
    const data = await fnAsync();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

console.log('Before');
anotherFn();
console.log('After');