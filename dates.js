'use strict';

// To create a date object we can use New Date
const now = new Date();
console.log(now);

// We can pass full data scope, like day, month, year etc.
console.log(new Date('Aug 02 2020 18:40:32'));
console.log(new Date('Dec 02 2020'));

// We can create a date which starts from 1970
// as the start day for time stamps

console.log(new Date(0)); // Date Thu Jan 01 1970 01:00:00 GMT+0100

// Each date has a time stamp - Total time in miliseconds
// From 1970 till creation of this date
console.log(now.getMilliseconds());

// As all objects, dates also have their own methods
const future = new Date('2047 12 01');
console.log(future);
console.log(future.getFullYear()); // 2047
console.log(future.getMonth()); // 12
console.log(future.getDate()); // 1
console.log(future.getDay()); // returns the day in the week 0

console.log(future.toISOString()); // geting nice formated string
console.log(future.getTime()); // returns timestamp of object
// 2458767600000
