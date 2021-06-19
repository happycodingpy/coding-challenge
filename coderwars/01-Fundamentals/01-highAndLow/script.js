const highAndLow = numbers => {
  const arr = numbers.split(' ').map((str, ind, arr) => Number(str, ind, arr));
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};

const result = highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
console.log(result);
