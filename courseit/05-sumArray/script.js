// Suma de array
// Nos gustaría crear una función que retorne la suma de todos los números de un array.
// ¿Podrías hacerlo?
// [1, 2, 3], [-5, -5], [-3, 3]
const arr = [1, 2, 3];
const arraySum = arr => {
  const arrSum = (a, c) => a + c;
  return arr.reduce(arrSum);
};

const a = arraySum(arr);
console.log(a);
