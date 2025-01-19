'use strict';

// This allows us to display dates according to user localisation
// For this we are using API of Intl
// we can find more info here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

const now = new Date();
console.log(new Intl.DateTimeFormat('en-US').format(now)); // 1/19/2025

// We can pass diffrent option values to affect display of it
const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};
console.log(new Intl.DateTimeFormat('en-UK', options).format(now)); // 19/01/2025
