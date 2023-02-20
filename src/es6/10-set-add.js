const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);

// Eliminar repetidos
const arreglo = [ 1, 1, 2, 3, 4, 4, 5 ];
console.log('con repetidos: ', arreglo);
const arregloNoRepeat = [ ...new Set(arreglo) ];
console.log('Sin repetidos: ', arregloNoRepeat);