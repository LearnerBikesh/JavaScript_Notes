// "use strict"

                // This Alone
// console.log(this) // winodow in browser and global in node js


                // This in object method

const student = {
    firstName : "Bikesh",
    age : 23,
    printAge : function(){
        console.log(this);  // object student
        console.log(this.age); // 23
    },
    another : {
        lastName : "Gupta",
        printAgain : function(){
            console.log(this) // object another
            console.log(this.age);  // undefined
        }
    }
}
// student.printAge();
// student.another.printAgain();




                    // This in function

function test(){
    console.log(this);   // window in browser and global in node js but in strict mode it is undefined
}
// test();


let fun = () =>{
    console.log(this)  // global object
}

// fun();

let school = {
    Name : "something",
    project : () =>{
        console.log(this)  // global object
        console.log(this.Name);  // undfined
    }
}
// school.project();



                // This methods 


const person1 = {
    name: 'Bikesh',
    surname: 'Gupta',
    sayName: function() {
        return this.name + " " + this.surname;
    },
    sayNameAgain : function(greet){
        return greet + ' ' + this.name + ' ' + this.surname;
    }
}

const person2 = {
    name: 'Mukesh',
    surname: 'Gupta'
}

// console.log(person1.sayName.call(person2));
// console.log(person1.sayNameAgain.call(person2, "hii"));
// console.log(person1.sayName.apply(person2));
console.log(person1.sayNameAgain.apply(person2,["hello"]));


/*
for methods 'this' keyword will refer to the object we passed as argument 
the difference between .call and .apply is if we have multiple argument then the first one is object and in .call other is passed seperated by ',' but in .apply others argument are passed inside an array


Bind method return a new function which should be executed independently
*/
