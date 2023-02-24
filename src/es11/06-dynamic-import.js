const boton = document.getElementById('btn');
boton.addEventListener('click', async function () {
  const module = await import('./module.js');
  console.log(module);
  module.hello();
})