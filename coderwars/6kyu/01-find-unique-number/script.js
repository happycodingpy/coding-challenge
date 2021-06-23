const findUniq = arr => arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));

console.log(findUniq([0, 1, 0]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));
