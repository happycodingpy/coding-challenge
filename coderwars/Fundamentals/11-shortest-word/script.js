function findShort(s) {
  return Math.min(...s.split(' ').map(word => word.length));
}

console.log(findShort("Let's travel abroad shall we"));
console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  )
);
