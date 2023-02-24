//Validando fechas
const regex = /(\d{4})-(\d{2})-(\d{2})/g;

const matchers = regex.exec(' 2022-01-22, 2023-10-10');
console.log(regex.lastIndex);
console.table(matchers);