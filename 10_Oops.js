/* Constructor function */

// It is considered good practice to name constructor functions with an upper-case first letter.
const Person = function(name , age){
    this.name = name;
    this.age = age;
    

    // this is bad practice
    // this.greet = function(){
    //     console.log(`Hii ${this.name} : You are ${this.age} year old`);
    // }
}

const person1 = new Person('Bikesh' , 20);
const person2 = new Person('Mukesh' , 23);
console.log(person1 , person2);


// Prototype
Person.prototype.greet = function(){
    console.log(`Welcome ${this.name} : You are ${this.age} year old`);
}
Person.prototype.type = 'Human';
// now we have greet fucntion to all the variables/const which is made using Person

person1.greet();
person2.greet();
console.log(person1.type);

console.log(person1.__proto__)  
console.log(Person.prototype);
console.log(person1.prototype);  // undefined



/* ES6 Clases */

class PersonCl {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    // Method will be added to .prototype property
    greet(){
        console.log(`Hello ${this.name}: You are ${this.age} year old`);
    }
}

const person3 = new PersonCl('Khushi' , 18);
console.log(person3);
console.log(PersonCl.prototype)


// Important notes about Classes
// 1: Classes are not hoisted
// 2: Classes are first class citizens
// 3: Classes are executed in strict mode





/* Inheritance in JavaScript */

class Students extends PersonCl{
    constructor(name , age , course){
        super(name ,age);
        this.course = course;
    }


    // if you have the same function as that in the parent class then the function in the child have the higher priority
    // it's like phle mai apne jeb me jhaak ke dekhunga agr kuch nhi mila tb apne parents k pass jaunga

    greet(){
        console.log(`My nane is ${this.name} and I am ${this.age} year old and studying ${this.course}`);
    }
}

const student = new Students("Kohli" , 45 , 'Computer Science');
console.log(student.greet());

// Encapsulation is still in development in javascript , you can see the md file attached to learn more about Encapsualtion