// Before ES6
function newUser(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 27;
  var country = country || 'MX';
  console.log(name, age, country);
};
newUser();

//With ES6
function newUser2(name = 'Oscar', age = 27, country = 'MX') {
  console.log(name, age, country);
}
newUser2();
newUser2('Kike', 22);