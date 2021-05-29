// Invertir numero
// Queremos que nuestra función 'invertNumber' nos devuelva el número que nos llega por parámetro pero de atrás para adelante.

// 123, 2323, 38028, 54123

const invertirNumber = num => {
  return Number(num.toString().split('').reverse().join(''));
};

console.log(invertirNumber(123));
console.log(invertirNumber(2323));
console.log(invertirNumber(38028));
console.log(invertirNumber(54123));
