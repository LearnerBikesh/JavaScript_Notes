// Default Parameters

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // 1 and 199 is the default parameters
  const booking = {
    flightNum, // same as flightNum : flightNum
    numPassengers,
    price: price * numPassengers,
  };

  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH134')
// createBooking('LH123' , 5 );
// createBooking('LH123' , 10 , 800 );

// Higher order function and callBack function

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  console.log(first);
  return [first.toUpperCase(), ...others].join(" ");
};

const transform = function (str, fn) {
  console.log(`Transformed string: ' ${fn(str)}`);
};
// the above function is taking a function as an argument

// transform('I am the best person of the world' , oneWord);
// transform('hello Bikesh' , upperFirstWord) ;
// the above function passed function as parameter but didn't call it , this function is called by transform function, this is called callback function

// Call , apply and bind method
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${this.flightNum}`, name });
  },
};

// lufthansa.book('239' , "Bikesh");
// lufthansa.book('239' , "Mukesh");

const eurowings = {
  airline: "Eurowings",
  bookings: [],
  iataCode: "EW",
};

// lufthansa.book.call(eurowings , '83' , 'Rahul');
// console.log(eurowings);
// book method is defined only in lufthansa and we wants to use it for eurowings
// for this we have to explicilty defined the this keyword , call method do the same , the first argument passed in call method is this keyword for the book

// apply method is same as call , the difference is except first argument is passed all other argument in the form of array

// bind method
// it return a function

const bookEW = lufthansa.book.bind(eurowings);
// now you have a new function just for the eurowings

// bookEW(91 , 'Arya');

// using bind method you can also fix the one or more argument
// for Example : if you want the flight number to be 23 for all the eurowings booking then
const bookEW23 = lufthansa.book.bind(eurowings, 23);
// bookEW23('Krishna');

// if you remember for event handler the this keyword is the element on which the event is happing so if you want to give some other this you can only use bind ,
// note here you cann't use call or apply because they are function which will be called immediately

//                              IIFE(immediatley invoked function)
// An immediately invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined

(function () {
  console.log("I will run only once and you can not call me again");
})();

(() =>console.log("I am also an example of IIFE i am called using arrow function"))();
