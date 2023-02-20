function* iterate(array) {
  for (let value of array) {
    yield value;
  };
};

const it = iterate([ 'Ivan', 'Enrique', 'Kike', 'Bebe' ]);

for (let i = 0; i < 4; i++) {
  let value = it.next();
  value.done
    ? null
    : console.log(value);
}
