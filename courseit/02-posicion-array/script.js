// Encotrá la posición en el array
// En base a un array ordenado 'arr', en que posicion se tendria que insertar 'num'?
// Si 'num' ya existe devolver su posicion actual.
// Por ejemplo: [10, 20, 30], 20 tendría que devolver 1
const arr = [10, 20, 30];
const num = 20;
const insertPosition = (arr, num) => {
  return arr.indexOf(num);
};

const a = insertPosition(arr, num);
console.log(a);
