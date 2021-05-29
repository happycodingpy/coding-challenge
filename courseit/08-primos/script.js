// Hacer que la función 'isPrime' retorne 'true' si el parámetro es un número primo y 'false' si no lo es.

const isPrime = numero => {
  // Casos especiales
  if (numero === 0 || numero === 1 || numero === 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x === 0) return false;
  }
  // Si no se pudo dividir por ninguno de los de arriba, sí es primo
  return true;
};

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(23));
