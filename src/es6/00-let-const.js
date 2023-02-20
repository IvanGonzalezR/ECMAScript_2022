var lastName = 'David';
var lastName = 'Oscar'; //Permite redeclaracion y reasignacion
console.log(lastName);

///// Con let y const

let fruit = 'Apple';
fruit = 'Kiwi'; // permite reasignacion pero no redeclaracion
console.log(fruit);

const animal = 'Dog';
animal = 'Cat'; // Error
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = 'Red Apple'; //function scope
    let fruit2 = 'Watermelon'; //block scope
    const fruit3 = 'Banana'; //block scope
  }

  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};
fruits();