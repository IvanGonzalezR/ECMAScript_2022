const user = {
  userName: 'ivan',
  edad: 23,
  country: 'MX',
  favNums: [ 1, 2, 3 ],
};

const { username, ...values } = user;

console.log(username);
console.log(values);