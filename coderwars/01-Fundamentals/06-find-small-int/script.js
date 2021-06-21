class SmallestIntegerFinder {
  findSmallestInt(args) {
    const min = Math.min(...args);
    return min;
  }
}

// const findSmallestInt = args => Math.min(...args);

console.log(findSmallestInt([78, 56, 232, 12, 8]));
console.log(findSmallestInt([78, 56, 232, 12, 18]));
console.log(findSmallestInt([78, 56, 232, 412, 228]));
console.log(findSmallestInt([78, 56, 232, 12, 0]));
console.log(findSmallestInt([1, 56, 232, 12, 8]));
