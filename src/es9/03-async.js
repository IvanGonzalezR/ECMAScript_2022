async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
};

const generator = anotherGenerator();
generator.next()
  .then(response => console.log(response));
generator.next()
  .then(response => console.log(response));
generator.next()
  .then(response => console.log(response));
console.log('Hello');

async function arrayOfNames(array) {
  for await (let value of array) {
    console.log(value);
  };
};

const names = arrayOfNames([ 'Ivan', 'Enrique', 'David' ]);