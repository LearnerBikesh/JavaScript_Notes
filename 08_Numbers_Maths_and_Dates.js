// Number is stored as decimals in JS
console.log(20);
console.log(20 === 20.0);   // true



// conversion

console.log(Number('40'));  // 40 as number
console.log(+'20');         // 20 as number

// parsing 
console.log(Number.parseInt('30rem' , 10));  // 30 as number
console.log(Number.parseInt('e35' , 10));    // NaN
console.log(Number.parseInt('  30   '));     // 30 as number
console.log(Number.parseFloat('    39px   '))       // 39 as number



// checking if value is number or not
console.log(Number.isFinite(39));  // true
console.log(Number.isFinite('30')); // false
console.log(Number.isFinite('20px')) // false
console.log(Number.isFinite(30/0));  // false

console.log(Number.isInteger(23))  // true
console.log(Number.isInteger(23.0))  // true
console.log(Number.isInteger(23/0))  // false





/*         Maths             */

console.log(Math.sqrt(25));  // 5
console.log(8 ** (1/3));     // 2


console.log(Math.max(1,2,3,4,15,6,7,8));   // 15
console.log(Math.max(3,19,'34' ,9,0));     // 34  (Type coersion)
console.log(Math.max(2,2,49,92,'29rem'));  // NaN


console.log(Math.trunc(39.39293032));   // 39 : remove number after decimal
// console.log(Math.random() * 10) ;     // 0 - 9

// function to get random number between max and min
const randomInt = (max , min) => Math.trunc((Math.random() * (max-min) + 1) + min);
console.log(randomInt(5,10));

// Math.floor()
// Math.ceil();
// Math.round();

// rounding decimals
console.log((2.6).toFixed(2));  // 2.60
console.log((2.6).toFixed(4));  // 2.6000
console.log((2.64959).toFixed(2));  // 2.65

// Big Int
console.log(20n);
console.log(typeof 20n)




/*          Dates             */
const now = new Date();
console.log(now);
console.log(new Date(0));  // base of date format



// working with dates
const future = new Date(2039,10 ,19 , 13,29,30); // (year, month , day , hour , min ,sec) // month is zero based

console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());  // gives standardized date
console.log(future.getTime());      // gives time in milliseconds , calculated after 1970-01-01T00:00:00.000Z
console.log(future.getTime(2205302370000)); // gives future date

future.setFullYear(2040);
console.log(future)