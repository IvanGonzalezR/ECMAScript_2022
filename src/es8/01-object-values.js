const countries = {
  MX: 'Mexico',
  CO: 'Colombia',
  CL: 'Chile',
  PE: 'Peru'
};

let valores = Object.values(countries);
for (let i of valores) {
  console.log(i);
}