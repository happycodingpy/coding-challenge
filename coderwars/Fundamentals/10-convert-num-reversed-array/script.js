// const digitize = n => Array.from(String(n), Number).reverse();

const digitize = n => n.toString().split('').map(Number).reverse();

console.log(digitize(35231));
console.log(digitize(348597));
