'use strict';

// Calculating squareroot
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(27 ** (1 / 3)); // 3

// Finding max and min value
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// works with number as string, doesnt work with parse
console.log(Math.max(1, 2, '3')); // 3

// Math trunct removes decimal part, return integer
console.log(Math.trunc(1.4567)); // 1
console.log(Math.trunc(54.55)); // 54

// Math round decimal part of number to nearest integer
console.log(Math.round(34.89)); // 35
console.log(Math.round(34.19)); // 34
console.log(Math.round(3.89)); // 4

// Math ceil return number rounded up
console.log(Math.ceil(11.11)); // 12
console.log(Math.ceil(44.66)); // 45

// Math floor return number rounded down
console.log(Math.floor(-34.189)); // -35
console.log(Math.floor(34.189)); // 34

// Math random return number between 0 and 1 without 1
console.log(Math.random()); // f.e. 0.4375135

// Rounding numbers, return string
// can be fixed with + sign
console.log(+(47.99).toFixed()); // 47
console.log(+(327.85343).toFixed(2)); // 327.85

function ranFunction(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(ranFunction(10, 20));
