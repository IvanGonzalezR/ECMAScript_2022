// metodo nuevo de los RegEx
const regexp = /\b(Apple)+\b/g;

const fruit = 'Banana, Apple2, Kiwi, Apple';

// console.log(fruit.match(regexp));

for (const match of fruit.matchAll(regexp)) {
  console.log(match);
}