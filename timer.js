'use strict';

// We cam use timer function to set function in time
// Timeout and Timeinterval
// First one is called once, interval is called many times

// Timeout
setTimeout(function () {
  console.log(`Your pizza has arrived`);
}, 3000);

// Using arguments
const ingredients = ['spinach', 'chocolate'];

const pizzaTimer = setTimeout(
  function (arg1, arg2) {
    console.log(`Your uber pizza with: ${arg1} and ${arg2} has arrived`);
  },
  2000,
  ...ingredients
);

// To create statment which can stop execution of timer we can use
// ClearTimeout

if (ingredients.includes('chocolate')) {
  clearTimeout(pizzaTimer);
}

const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

// Timeinterval
setInterval(function () {
  const date = new Date();
  const time = new Intl.DateTimeFormat(navigator.language, options).format(
    date
  );
  console.log(time);
}, 1000);
