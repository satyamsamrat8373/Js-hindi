const score = 400;
//console.log(score);

// When we declared using data types it will give you with the a data-types.
const balance = new Number(100);
//console.log(balance);

//console.log(balance.toString()); // It will convert numbers into Strings.
//console.log(typeof balance);

//console.log(balance.toString().length); // It will give the length i.e.3

//console.log(balance.toFixed(2)); // toFixed is used to give the number after the decimal i.e. 2 numbers after decimal.

const othernum = 123.8765;
//console.log(othernum.toPrecision(4));


//toLocaleString function is used to separated num by comma in USA format.
const hundred = 10000000;
//console.log(hundred.toLocaleString()); // output 10,000,000

//toLocaleString function is used to separated num by comma in Indian format by using 'en-IN'.
//console.log(hundred.toLocaleString('en-IN')); //output 1,00,00,000

//~~~~~~~~~~~~~~~~~~~~~~~Maths~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(Math); // It will give output as object.
console.log(Math.abs(-4)); // It will do negative value in positive i.e. 4.
console.log(Math.round(4.6)); // It will round of 5.
console.log(Math.ceil(4.1)); // It will round of to 5 as highest it will give.
console.log(Math.floor(4.9)); // It will give as 4 because floor is for lowest.
console.log(Math.min(2,4,1,6)); // It will give smallest num in array i.e. 1.
console.log(Math.max(2,4,1,6)); // It will give highest num in array i.e. 6.

console.log(Math.random()); // It will give value between 0 and 1. The value always differ when u do the next print.
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// In case of maximum and minimum.
const min = 10;
const max = 15;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);