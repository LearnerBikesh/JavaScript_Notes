                                    // Function Hoisting
// "use strict";


// printHello();
function printHello(){
    console.log('Hello World');
}

/*
Before the interpreter executes the whole code, it first hoists (raises, or lifts) the declared function to the top of the scope it is defined in. In this case, printHello is defined in the global scope, so the function is hoisted to the top of the global scope. Through hoisting, the function (including the logic) becomes accessible even before the line it was declared in the code.

"Hoisting makes all these possible for function declarations. But, it's also worth noting that hoisting does not occur on function expressions."
*/


// printHello();  // Hello
// greet();   // greet is not defined
function printHello(){
    console.log("Hello")
    // greet();  // Welcome
    function greet(){
        console.log("Welcome")
    }
}

/* 
For the above code printHello() is hoisted globally so we can access it.
greet() is hoisted , but it will only lifted to the top of the scope it was declared in , in this case printHello()
*/




                            // Variable Hoisting (Var)

// console.log(MyName);  // undefined
var MyName = 'Bikesh';
console.log(MyName);

/* 
Here in case of var , var is hoisted and initialized with undefined
*/


                            // Variable Hoisting(let and const)

// console.log(Roll); // Cannot access before Initialization
let Roll = 10;
console.log(Roll);

/* 
let and const is also hoisted but they are not initialized with undefined or any other value 
they are in Temporal Dead Zone(TDZ) until initialized in their scope. Classes inside JS are also hoisted just like let and const
*/




                        // Hoisting in Function Declaration and Function Expression

// We have seen hoisting in function Declaration in the starting 


// function which are created without name is called Function Expression

// console.log(sum(2,3)); // Cannot access sum before initialization
// console.log(sum2(2,3))   // Cannot access sum before initialization
// console.log(sum3(2,3))   // Sum3 is not a function
console.log(sum4(2,3));     // Cannot access 'sum4' before initialization
let sum = function(num1 , num2){
    return num1 + num2;
}

const sum2 = function(num1 , num2) {num1 + num2};
var sum3 = (num1 , num2) => (num1 + num2);  // use this if you wants to return object and for () you didn't have to write return keyword
const sum4 = (num1 , num2) => num1 + num2;


/*
for function expression is just like a variable whose type is function, therfore it's hoisting occurs according to let , const , var
for var the error will be 'not a function' because var is initialized with undefined and calling (undefined()) will give error 
*/