'use strict';
// In JS float and integral numbers are equal
// We have two ways of converting data into numbers
// using function "Number" or + sign

console.log(Number('23')); // 23
console.log(+'23'); // 23

// Parsing
// Parsing alows us to remove unnecessery data from input
// to leave only number. It works for int and float
// !!! IMPORTANT data needs to start with number

console.log(Number.parseInt(' 23asdfc asd ')); // 23
console.log(Number.parseFloat('2.3asdfe')); // 2.3

// We can check if data is number by using:
// isNaN, isFinite or isInteger

// Check if value is NaN
console.log(Number.isNaN('20')); // False
console.log(Number.isNaN(+'20ex')); // True

// Check if value is number
console.log(Number.isFinite(20)); // True
console.log(Number.isFinite('20')); // False
console.log(Number.isFinite(20 / 0)); // False

console.log(Number.isInteger(20)); // True
