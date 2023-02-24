try {
  hello();
} catch (error) {
  console.error(error);
};

try {
  anotherFn();
} catch {
  console.log('Esto es un error');
}