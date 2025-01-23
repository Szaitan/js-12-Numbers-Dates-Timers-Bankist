'use strict';

// We can affect numbers in the same way as we could dates
// we can find more info here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

const num = 123456.789;
const options = {
  style: 'currency',
  currency: 'EUR',
};

console.log(new Intl.NumberFormat('de-DE', options).format(num)); // 123.456,79 €
console.log(new Intl.NumberFormat('en-US', options).format(num)); // €123,456.79

const options2 = {
  style: 'unit',
  unit: 'celsius',
};

console.log(new Intl.NumberFormat('de-DE', options2).format(num)); // 123.456,789 °C
console.log(new Intl.NumberFormat('en-US', options2).format(num)); // 123,456.789°C

// with using local language

console.log(new Intl.NumberFormat(navigator.language, options2).format(num)); // 123 456,789 st. C
