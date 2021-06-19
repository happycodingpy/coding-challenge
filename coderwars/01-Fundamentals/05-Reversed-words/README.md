# Reversed words

Complete the solution so that it reverses all of the words within the string passed in.

Example:

`"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"`

Solutions:

```javascript
const reverseWords = str => str.split(' ').reverse().join(' ');
```

Explanation

Part 1

```javascript
const reverseWords = str => str.split(' ');

console.log(reverseWords('yoda doesnt speak like this'));

// [ 'yoda', 'doesnt', 'speak', 'like', 'this' ]
```

Part 2

```javascript
const reverseWords = str => str.split(' ').reverse();

console.log(reverseWords('yoda doesnt speak like this'));

// [ 'this', 'like', 'speak', 'doesnt', 'yoda' ]
```

Part 3

```javascript
const reverseWords = str => str.split(' ').reverse().join(' ');

console.log(reverseWords('yoda doesnt speak like this'));

// this like speak doesnt yoda
```
