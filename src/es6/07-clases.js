// class User {

// };

// Instanciando una clase
// const user1 = new User();

class User {
  //constructor
  constructor(name, password) {
    this.name = name || 'Kike';
    this.password = password || '12345';
  }
  //metodos
  saludo() {
    return 'Hola Funcion';
  };
};

const usuario = new User('Jazz', 'Bebecita');
// console.log(usuario); // { name: 'Jazz', password: 'Bebecita'}
console.log(usuario.saludo());
const usuario2 = new User();
console.log(usuario2.saludo());

//constructor

class User {
  //constructor
  constructor() {
    console.log('Nuevo usuario');
  }
};
const user3 = new User();

// this // Referencia al elemento padre que lo contiene
class User {
  //constructor
  constructor(name) {
    this.name = name || 'Usuario';
  };
  //metodos
  speak() {
    console.log(`Hola, ${this.name}`);
  }
};
const user4 = new User('Kike');
user4.speak();

// Getters y Setters
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
  //METODOS
  speak() {
    return 'Hello';
  };
  saludar() {
    return `${this.speak()} ${this.name}`
  };

  get userAge() {
    return this.age;
  };
  set userAge(n) {
    this.age = n;
  };
};
const user5 = new User('David', 24);
console.log(user5.userAge);
console.log(user5.userAge = 5);