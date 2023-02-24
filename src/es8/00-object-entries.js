const countries = {
  MX: 'Mexico',
  CO: 'Colombia',
  CL: 'Chile',
  PE: 'Peru'
};
// console.log(Object.entries(countries));

const entradas = Object.entries(countries);
for (const i of entradas) {
  console.log(i[ 0 ], i[ 1 ]);
}