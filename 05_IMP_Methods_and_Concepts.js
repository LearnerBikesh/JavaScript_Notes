//                            REST PATTERN AND PARAMETERS

const arr = [2,4,2,5,2,9,3,9,2,9,4,7,2,3,9];
const[x ,y , ...others] = arr;
// console.log(x, y , others);// x = 2, y = 4 and others = [2,5,2,9,3,9,2,9,4,7,2,3,9]

// jb = sign k baad aaye tb spread operator hota hai aur vhi agr phle aa jae to rest paramter ho jata haii


const add = (...numbers) =>{ // ek ek element jo arr ne spread kr k bheja vo yha pe array me store ho ja rha jisko hm numbers keh rhe
    let sum = 0;
    for(let i = 0; i < numbers.length ; i++){
        sum += numbers[i];
    }
    console.log(sum);
}



// add(...arr) // numbers spread ho rha



//                          SHORT CIRCUITING (&& AND ||)


/*
    && :- Returns when it get the first false value else returns the last value
    || :- Returns when it get the first True value else return the last value

    These two logical operators can use any data type and can return any data type

    FalsyValues :- false, 0, -0, 0n, "", null, undefined, NaN.
    TrutyValues :- Values that are not falsy are truthy
*/

// console.log(4 || 'Bikesh')      // 4
// console.log('' || 'Bikesh')     // Bikesh
// console.log(true || 0)         // true
// console.log(undefined || null);         // null (Because undefined is falsy value and null is also falsy value therefore last value is returned)
// console.log(false || 0 || -0 || "" || null || undefined || NaN || "0")  // 0



// console.log("Bikesh" && 0) // 0 
// console.log('Hello' && 23 && null && 'jonas');  // null
// console.log('0' && "false" && 'bikesh');   // bikesh




//                          NULLISH COALESCING OPERATOR


// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const myName = (name) =>{
    // if name is not passed while calling the function the it will print the left operand
    console.log(name ?? "Name is not given");
}

// myName();   // Name is not given
// myName("Bikesh");   // Bikesh






//                              𝐎𝐩𝐭𝐢𝐨𝐧𝐚𝐥 𝐜𝐡𝐚𝐢𝐧𝐢𝐧𝐠 (?.)   

//  The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

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

const days = ['mon' , 'tue' , 'wed' , 'thu' , 'fri' , 'sat' , 'sun'];

for(const day of days){
    const openAt = restaurant.openingHours[day]?.open ?? 'closed';
    // if openingHours me particular nhi hai to first operand undefined ho jaega 
    
    if(openAt != 'closed'){
        console.log(`On ${day} , we open at ${openAt}`);
    }else{
        console.log(`on ${day} , we are ${openAt}`);
    }
}

// it also works with methods and arrays (to check method exits and arrays is empty or not)