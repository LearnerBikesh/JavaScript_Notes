const myArr = [1,2,3,4,"Bikesh" , [9,3,6,3]];

// console.log(myArr);
// console.log(myArr[3]);
// console.log(myArr[5])
// console.log(myArr.length) 
// console.log(myArr[20]) // undefined

const years = new Array(1929,1924,1942,2021);
// console.log(years)


//                      𝐀𝐫𝐫𝐚𝐲𝐬 𝐌𝐞𝐭𝐡𝐨𝐝𝐬

const fruits = ['banana', 'apple', 'peach',  'mango', 'guavava'];
// console.log(fruits)
fruits.push('pineapple');
// console.log(fruits)
fruits[10] = 'orange';
// console.log(fruits)
fruits.pop();
// console.log(fruits);
// console.log(fruits.length)  // it will also count the empty element if you have created
// console.log(fruits.shift());   // remove first element and return the removed element
// console.log(fruits.unshift('grapes'))  // add element in the begining of the array and also return the length
// console.log(fruits)




//                  slice() and splice() methods











//                      𝐃𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐢𝐧𝐠 𝐀𝐫𝐫𝐚𝐲𝐬

const restaurant = {
    name : 'Mama Ji',
    location : 'Delhi India',
    categories : ['Italian' , 'Pizzeria' , 'Vegetarian' , 'Organic'],
    starterMenu : ['Focaccia' , 'Bruschetta' , 'Garlic Bread' , 'Caprese Salad'],
    mainMenu : ['Pizza' , 'Pasta' , 'Risotto'],
    order : function(starterIndex , mainIndex){
       return [this.starterMenu[starterIndex] , this.starterMenu[mainIndex]];
    }
};


const arr = [32,53,82];
// const [a , b , c] = arr; // 32, 53, 82
// console.log(a, b , c);

const [a , , b] = arr;
// console.log(a , b);  // 32 , 82


let [first , second] = restaurant.categories;   
// console.log(first , second);


// Tast : Swap the value of first and second
[first , second] = [second , first];
// console.log(first , second)

// console.log(restaurant.order(2,0));
// if you want to store these two return values then you can use destructing and can save lot of redundant codes
const [starter , main] = restaurant.order(3,2);
// console.log(starter , main);



// for nested array

const nested = [1,2,[3,4,5]];
let [i , , j] = nested;
// console.log(i , j)   // 1 [3,4,5]

let[x, , [y, , z]] = nested;
// console.log(x , y , z)  // 1 3 5



// Default values
const [p=20 , q, r=1] = [9,10];  // if p is not defined then it's default value will be 20
// console.log(p,q,r);



//                          𝐒𝐩𝐫𝐞𝐚𝐝 𝐎𝐩𝐞𝐫𝐚𝐭𝐨𝐫

const arr2 = [4,5,6];
const newArr2 = [1,2,3,arr];   // [ 1, 2, 3, [ 32, 53, 82 ] ]
const newArr3 = [1,2,3,...arr];  // [ 1, 2, 3, 32, 53, 82 ]

// console.log(newArr2);
// console.log(newArr3)

// console.log(arr2);   // it will print the array [4,5,6];
// console.log(...arr2) ; // it will print the individual elements of the array  4,5,6

// copying array
const arr2Copy = [...arr2];
// console.log(arr2 , arr2Copy)

//                                   𝐉𝐨𝐢𝐧𝐢𝐧𝐠 𝐚𝐫𝐫𝐚𝐲 
// const menu = [...restaurant.starterMenu , ...restaurant.mainMenu]
// console.log(menu);



//                                  𝐋𝐨𝐨𝐩𝐢𝐧𝐠 𝐚𝐫𝐫𝐚𝐲 

// 1:- For of loop

const menu = [...restaurant.starterMenu , ...restaurant.mainMenu];

// for(const item of menu){
//     console.log(item);
// }


// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
// for(const item of menu.entries()){
//     console.log(item);
// }

//use of entries()

// console.log("List of item that we serves here :- ")
// for(const [i , el] of menu.entries()){
//     console.log(`${i + 1} : ${el}`);
// }


// for each 
const cashFlow = [200,-450,-400,3000,-650,-130,70,1300]

// for each method loop all the elements of the array with a callback function which have three parameters (element , index , the array) , it does not return anything
// cashFlow.forEach(function(cash , i , arr){
//     if(cash > 0){
//         console.log(`${i + 1}: You deposited ${cash}`);
//     }
//     else{
//         console.log(`${i + 1}: You Withdrew ${Math.abs(cash)}`);
//     }

//     return 10;
// })

//                              Array Methods


//                              slice() - works just like it does in string , does not change the original array
let arrSL = ['a' , 'b' , 'c' , 'd' , 'e'];
// console.log(arrSL.slice(2))
// console.log(arrSL.slice(2 , 4))
// console.log(arrSL.slice(-2))
// console.log(arrSL.slice(-1))

// // it can be used to create shallow copy of the original array
// console.log(arrSL.slice());
// console.log(arrSL);




//                              splice() - it does mutate the original array
const arrSP = [...arrSL];
// console.log(arrSP.splice(2));
// console.log(arrSP.splice(-1));  // this will remove the last element from the arrSP array
// console.log(arrSP);


//                               Reverse() - it does mutate the original array

// console.log(arrSP)
// console.log(arrSP.reverse());
// console.log(arrSP);



//                              Concat() - it does not mutate the original array
// console.log(arrSL.concat(arrSP));
// console.log(...arrSL , ...arrSP);



//                              at() 

const arrAt = [1,2,3,4,5,6,7];
// console.log(arrAt.at(4));

// // getting the last element of the array
// console.log(arrAt[arrAt.length - 1]);
// console.log(arrAt.slice(-1));
// console.log(arrAt.at(-1));






//                              map() 
// Map returns a new array containing the results of applying an operation on all original array elements
// Accumulator : function(Element , Index , Array on which it is called)
const arrMap = [1,2,3,4,5,6,7];
const arrMap2 = arrMap.map((element , index , arr) =>{
    
    return element + (index + 1);
})

// console.log(arrMap);
// console.log(arrMap2);



//                              filter()
// filter returns a new array containig the array elements that passed a specified test condition
// Parameters : function(Elements , Index , Array on which it is called)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

const deposits = movements.filter((el, index, arr) =>{
    return el > 0;
})
// console.log(deposits);



//                              Reduce()
// Reduce , reduces all the array elements down to one single value (e.g , adding all elements together)
// Parameters : callback function(Accumulator , Element , Index , Array on which it is called) , initial accumulator value

// const balance = movements.reduce((acc , el , index , arr) =>{
//     console.log(`Iteration ${index}: ${acc}`);
//     return acc + el;
// },0)
// console.log(balance);

// Maximum Value
const max = movements.reduce((acc, el)=>{
    return acc > el ? acc : el;
} , movements[0])

// console.log(max);




//                              find



//                              findIndex


//                              Some and every


//                              flat / flatMap
const arrFlat = [[1,2,3] , [3,9,[2,3]] ,3,5,2,7];
// console.log(arrFlat.flat(2))   // 2 means two level deep , if it is not passed then it will be one level deep only





//                          Sort- By default it work on the basis of strings
const arrSo = [2,4293,82,386,18,9];
// console.log(arrSo.sort());

// to make it work according to number , we have to use comparables

// if return value > 0 then A will be first and B will be second A , B
// if return value < 0 then A will be Second and B will be first B , A
// arrSo.sort((a , b) =>{
//     if(a > b){
//         return 1;
//     }
//     else {
//         return -1;
//     }
// })

// simplified
arrSo.sort((a , b) => {
    return a - b;
});
// console.log(arrSo);



//                          fill(value , startIndex , EndIndex);
const newArr4 = new Array(10);
newArr4.fill(4); // all the element will be filled with 4
newArr4.fill(3,5);  // all the element from index 5 to end will be filled with 3
newArr4.fill(0,3,7) // all the element from index 3 to 7 will be filled with 0
console.log(newArr4);