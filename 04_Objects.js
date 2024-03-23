const mySym = Symbol('key');

const myObj = {
    name : "Bikesh",  // name(key) is stirng , but we do not have to explicilty write it as stirng JS engine understand it as string
    'full Name' :  "Bikesh Gupta",   // if key contains space then you have to write it as string an the only way to access it is by using brackets , you can't access it using . method
    age : 21,
    email : "bikesh@apple.com",
    isLoggedIn : false,
    [mySym] : "myKey"  // key ko add krne k liye [] use krna pdta hai
}


// console.log(myObj.name);  // Bikesh
// console.log(myObj[name]) //error , name is not defined , because in bracket access method we have to give key as string
// console.log(myObj["name"]);  // Bikesh
// console.log(myObj['full Name']); // Bikesh Gupta

// Interview question :- Take a Symbol add it as a key in object and print it as key
// console.log(myObj)


// you can also freez object means if you freez object then you can not change it's value
// myObj.name = "Mukesh";
// Object.freeze(myObj);
// myObj.name = "Khushi"
// console.log(myObj);


// adding function to the object
myObj.greet = function(){
    console.log("Hello Coder");
}
// console.log(myObj)
// console.log(myObj.greet);
// console.log(myObj.greet());


//                          Object using constructor

const tinderUser = new Object();

tinderUser.id = "323"
tinderUser.name = "Bikesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


// You can also create nested objects




//                  Combining Object

const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}

// const obj3 = {obj1 , obj2};
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// const obj3 = Object.assign(obj1 , obj2);   // obj1 me obj1 and obj2 assign ho jaenge obj3 === obj1
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// const obj3 = Object.assign({} , obj1 , obj2);   // ek empty object me obj1 and obj2 assign ho jaenge and obj1 != obj3
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

const obj3 = {...obj1 , ...obj2};  // ek empty object me obj1 and obj2 mil jaenge
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)



// Object.keys(ObjName) // returns array of keys
// Object.values(ObjName) // returns array of values
// Object.entries(ObjName)



//                      Object Destructuring


const restaurant = {
    name : 'Mama Ji',
    location : 'Delhi India',
    categories : ['Italian' , 'Pizzeria' , 'Vegetarian' , 'Organic'],
    starterMenu : ['Focaccia' , 'Bruschetta' , 'Garlic Bread' , 'Caprese Salad'],
    mainMenu : ['Pizza' , 'Pasta' , 'Risotto'],
    order : function(starterIndex , mainIndex){
       return [this.starterMenu[starterIndex] , this.starterMenu[mainIndex]];
    },
    openingHours : {
        thu: {
            open : 12,
            close : 22,
        },
        fri: {
            open : 11,
            close : 23,
        },
        sat: {
            open : 0,
            close : 24,
        },
        
    },
    orderDelivery : function({starterIndex = 1, mainIndex , time = '20:00' , address}){
        console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    }
};


const {name: myName , categories , location , starterMenu , openingHours} = restaurant;
// console.log(myName ,location);


// object ko destructure krne k liye {} use krte hai aur array k liye [] 
// object destructuring me order maine nhi rakhta , bus keys k naam same hone chahiye
// agr aapko apna alg se naam dena hai to name : yourName use kr skte ho


// giving default values

const {main = [] , mainMenu : Menu = []} = restaurant;
// console.log(main , Menu)
// for the above code main is not defined therefore it will take the default value i.e []
// mainMenu is renamed as Menu but it is defined in the object therefore it will not take the default value



// Mutating variables
let a = 20;
let b = 29;
const obj = {a : 23 , b : 82 , c : 39};
// {a, b} = obj;  // this is an invalid syntax , to destructure object which is initialized earlier you have to enclose the destructuring assignment in () 
({a , b } = obj);
// console.log(a , b);

// nested destructuring
const {fri : {open : o , close : c}} = openingHours;
// console.log(o  , c)


// real life use-case example
// restaurant.orderDelivery({
//     time : '22:30',
//     address : 'Varanasi',
//     mainIndex : 2 ,
//     starterIndex : 2,
// });

// restaurant.orderDelivery({
//     mainIndex : 1,
//     address : 'Ranchi',
//     // for this starteIndex and time will be default
// })



//                      spread Operator

// copying 

const newRestaurant = {...restaurant};
newRestaurant.name = 'fufa ji';
// console.log(newRestaurant.name , restaurant.name);



//                      𝐋𝐨𝐨𝐩𝐢𝐧𝐠 𝐨𝐯𝐞𝐫 𝐨𝐛𝐣𝐞𝐜𝐭 (objects are not iterables , we will use indirect methods)

// 1: keys


const keys = Object.keys(openingHours);
// console.log(`we are open ${keys.length} days in a week`);

let openStr = `we are open on :  `
for(const day of keys){
    openStr += `${day}, `;
}
// console.log(openStr);

// 2: values
const values = Object.values(openingHours);
// console.log(values)

// to loop over keys and values at once we can use entries()
const entries = Object.entries(openingHours);
// console.log(entries)

for(const [day , {open , close}] of entries){
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}