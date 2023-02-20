//ES6 - Array destructuring

let fruits = [ 'Apple', 'Kiwi', 'Banana' ];
let [ a, , c ] = fruits;
console.log(a, c);
console.log(fruits[ 1 ]);

let [ e, f ] = [ 1, 3 ];
console.log(e, f);
let [ g, ...rest ] = [ 1, 2, 3, 4, 5 ];
console.log(rest);

//ES6 - Object destructuring
let user = {
  username: 'Kike',
  age: 22,
  country: 'Mx'
};
let { age } = user;
console.log(age, user.country);

///// Spread operator
let person = {
  name: 'Kike',
  age: 22
};
let country = 'MX';

let data = {
  id: 1,
  ...person,
  country
};
console.log(data);

// REST
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[ 0 ]);
};
sum(1, 2, 3, 4);


let kissEmoji = [ ..."👩‍❤️‍💋‍👩" ]
console.log(kissEmoji)

let familyEmoji = [ ..."👨‍👩‍👦‍👦" ]
console.log(familyEmoji)