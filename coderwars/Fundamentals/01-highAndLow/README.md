En esta pequeña tarea, se le da una serie de números separados por espacios y debe devolver el número más alto y el más bajo.

### Ejemplo:

```javascript
highAndLow('1 2 3 4 5'); // devuelve "5 1"
highAndLow('1 2 -3 4 5'); // devuelve "5-3"
highAndLow('1 9 3 4 -5'); // devuelve "9-5"
```

**Notas:**

- Todos los números son Int32 válidos, no es necesario validarlos.
- Siempre habrá al menos un número en la cadena de entrada.
- La cadena de salida debe tener dos números separados por un solo espacio, y el número más alto es el primero.

```javascript
const highAndLow = numbers => {
  // ...
};
```

**_Solucion_**

```javascript
// .map(Number) es igual a: .map((str,ind,arr) => Number(str,ind,arr))
// .map(Number) toma solamente el primer argumento (str) e ignora las demás

const highAndLow = numbers => {
  const arr = numbers.split(' ').map(Number);
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};
```
