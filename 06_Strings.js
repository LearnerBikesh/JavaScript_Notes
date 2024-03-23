const str = "My name is Khan";
// console.log(str[0]);
// console.log(str[6])
// console.log(str.indexOf('i'));
// console.log(str.lastIndexOf('m'));
// console.log(str.length);

// // slice method

// console.log(str.slice(2))   // begin index , jha se slice krna start index , if end state is not given then it is last index + 1
// // this method or any other string method will return new string because strings are immutable

// console.log(str.slice(3,8));

// console.log(str.slice(0 , str.indexOf(' '))); // My
// console.log(str.slice(0 , str.lastIndexOf(' ')))    // My name is

// console.log(str.slice(-4));   // Khan , last se 4 character
// console.log(str.slice(0,-1));  // last se 1 character chhod k saare print kr dega

// Some methods of Strings

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// Challenge 1 : Capitalze the give name

const capitalize = function (name) {
  console.log(
    `${name[0].toUpperCase()}` + `${name.slice(1).toLocaleLowerCase()}`
  );
};

// capitalize("bIkeSh");


// Chanlange 2 : Make two email identical

const email1 = 'Bikesh@gmail.com'
const email2 = '    bikesh@gmail.com    \n';

// console.log(email1.toLowerCase() === email2.toLowerCase().trim());


// replace() method

const priceGB = '288,97€';
const priceUS = priceGB.replace('€' , '$').replace(',' , '.');
// console.log(priceUS);


// some method that returns booleans

const plane = 'A320neo';
// console.log(plane.includes('20ne'));
// console.log(plane.startsWith('A32'));
// console.log(plane.startsWith('a32'));
// console.log(plane.endsWith('neo'));


/*   String method are case senstive */




// split() and join()

// console.log('I-am-the-greatest-person-all-time'.split('-'));
// console.log('I am the greatest person all time'.split(' ').join(' '));



// padding

const message = 'Hello';
console.log(message.padStart(10 , '-').padEnd(15,'+'));   // it will make the length the of the message to 30 and the space left after removing the length of the message is padded with the given character


const maskAdharcard = function(number){
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length , '*');
}

console.log(maskAdharcard(392938283928942));
console.log(maskAdharcard('39293828392'));
