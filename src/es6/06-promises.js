//Antes con Callbacks 
//Luego con promesas
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Resuleto!');
    } else {
      reject('Ni pedo pues');
    }
  });
};

anotherFunction()
  .then(response => console.log(response))
  .catch(error => console.error(error));
//Ahora con Async Await