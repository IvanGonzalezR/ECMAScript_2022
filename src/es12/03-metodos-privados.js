// la # los vuelve privados 

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
  //METODOS
  #speak() { //speak ahora es privado
    return 'Hello';
  };
  saludar() {
    return `${this.speak()} ${this.name}`
  };

  get #userAge() {
    return this.age;
  };
  set #userAge(n) {
    this.age = n;
  };
};
const user5 = new User('David', 24);
console.log(user5.userAge);
console.log(user5.userAge = 5);