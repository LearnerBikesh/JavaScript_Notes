## What is THIS in JS
- `In JavaScript, the this keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.`

## This Alone
- If we call this by itself, meaning not within a function, object, or whatever, it will refer to the global object. This global object could be different dpending upon the js runtime environment. In browser it refers to window object but in node it refers to global .



## This in object Method
- In an object method, this refers to the object.



## This in function
- In a function, `this` refers to the global object.
- In a function, in strict mode, `this` is undefined.
- In arrow functions, JavaScript sets the `this` lexically. This means that the arrow function doesn't create its own execution context but inherits the `this` from the outer function where the arrow function is defined.


## This in Event Listner
- In an event, this refers to the element that received the event.


## This Methods
- Methods like call(), apply(), and bind() can refer this to any object.