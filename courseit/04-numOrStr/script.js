// ¿Es String o Number?
// Determinar si el valor recibido (value) es 'number' o 'string'
// 'Hola', 5
const value = 'Hola';
const numOrStr = value => {
  const r = typeof value === 'number' ? 'number' : 'string';
  return r;
};

const a = numOrStr(value);
console.log(a);
