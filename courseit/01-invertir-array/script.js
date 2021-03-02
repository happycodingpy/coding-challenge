// Invertir Array
// Vamos a recibir un array, y debemos invertirlo
const reverseArray = arr => {
  return arr.toString().split('').reverse().join('');
};

const a = reverseArray([1, 2, 3, 4, 5]);
const b = reverseArray([11, 22, 3, 45, 5, 6, 15]);
const c = reverseArray('Javascript is amazing!');
console.log(a);
console.log(b);
console.log(c);
