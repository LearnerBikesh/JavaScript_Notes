// This file is just to learn the syntax as there is no html file is attacthed you will not see these in effect

/* Selecting , creating and Deleting Elements  */


// Selecting
document.documentElement   // selects all the HTML of the page
document.head;
document.body;

document.querySelector('class or id name');  // selects the first matching elements
document.querySelectorAll('class or id name') // selects all the matching element

document.getElementById('id name') // selects the matching id element
document.getElementsByClassName('class name') // selects the matching class element
document.getElementsByTagName('tag name') // selects the first matching tag element



// Creating and adding
const message = document.createElement('div');
message.innerHTML = 'this is very important message <button> Read </button>'

//adding
body.append(message);
body.append(message.cloneNode(true));
body.prepend(message);
body.before(message);
body.after(message);



// removing
body.removeChild();


// style , attributes and classes
