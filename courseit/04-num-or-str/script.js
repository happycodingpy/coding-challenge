// ¿Es String o Number?
// Determinar si el valor recibido (value) es 'number' o 'string'
// 'Hola', 5
const value = 'Hola';
const numOrStr = value => (typeof value === 'number' ? 'number' : 'string');

const a = numOrStr(value);
console.log(a);
