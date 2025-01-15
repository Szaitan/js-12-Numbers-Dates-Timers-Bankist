'use strict';

// In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).
// With this standard, large integer cannot be exactly represented and will be rounded.
// Because of this, JavaScript can only safely represent integers:

// Up to 9007199254740991 +(253-1)
// and
// Down to -9007199254740991 -(253-1).

// To deal with bigger number then this point we can use:
// adding "n" at the very end of number
console.log(9999999999999999999999999999999n);

// or

// we can use function Bigint()
// ! but there can appear some problems so its better to use first option
console.log(BigInt(999999999999999));

// We can have operation on bigint with using number of the same type, but no diffrent
console.log(999999n + 9999999n); // 10999998n

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); //bigint
console.log(20n == '20'); // true
console.log(20);
