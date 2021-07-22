// Queremos que la función basicCalculator, recibiendo: un número, un operador ('+', '-', '*', '/'),
// y otro número, resuelva la cuenta ingresada
function basicCalculator(firstNumber, operator, secondNumber) {
  return eval(`${firstNumber} ${operator} ${secondNumber}`);
}
console.log(basicCalculator(2, '*', 3));
console.log(basicCalculator(25, '/', 2));
console.log(basicCalculator(25, '-', 2));
console.log(basicCalculator(25, '+', 2));
