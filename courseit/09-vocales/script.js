// Queremos hacer que la función 'vowelCounter' retorne la cantidad de vocales que tiene el parámetro 'str'

const vowelCounter = str => (`${str}`.match(/[aeiou]/gi) || '').length;

console.log(vowelCounter('CourseIt'));
console.log(vowelCounter('courseit'));
console.log(vowelCounter('vocales'));
console.log(vowelCounter('aeiou'));
