//Antes con Callbacks 
//Luego con promesas
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Resuleto!');
      }, 1000)
    } else {
      reject('Ni pedo pues');
    }
  });
};

anotherFunction()
  .then(response => console.log(response))
  .catch(error => console.error(error))
  .finally(() => console.log('Finally'));
//Ahora con Async Await