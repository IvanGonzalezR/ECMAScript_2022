// flat

const array = [ 1, 2, 3, 4, 5, 6, [ 8, 9, 88, [ 10, 11, 23 ] ] ];
console.log(array.flat(2)); //2 es la profundidad puede ser 1

// flatMap
const array2 = [ 1, 2, 3, 4, 5, 6, [ 8, 9, 88, [ 10, 11, 23 ] ] ];
console.log(array2.flatMap(((value) => [ value * 2 ])));
