"use strict";

console.log("Day 13: The this keyword");

/* 
Rules in JavaScript for the this keyword:

1. Global Context: In the global execution context (outside of any function), the this keyword refers to the global object, which is window in browsers.

2. Object Method: When a function is called as a method of an object, the this keyword refers to the object that is calling the method.

3. Constructor Function: When a function is used as a constructor (with the new keyword), the this keyword refers to the newly created object.

4. Explicit Binding: The this keyword can be explicitly set using call(), apply(), or bind() methods.

5. Arrow Functions: Arrow functions do not have their own this context. Instead, they inherit the this value from the enclosing lexical context.

6. Strict Mode: In strict mode, if a function is called without an explicit context, the this keyword will be undefined instead of referring to the global object.  
*/

// Global

// this keyword and window object
console.log("this at the global", this); // window

// object
// function

// Inside of an Object - Implicit Binding
/*
this keyword inside an object refers to the object itself. 
It is used to access the properties and methods of the object. 
When a method is called on an object, the this keyword inside that 
method refers to the object that is calling the method.
*/
const emplpyee = {
    id: "A5778",
    firstName: "Alex",
    lastName: "B",

    returnThis: function() {
        return this;
    },

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log("Employee Id", emplpyee.id); // "A5778"
console.log("this inside the employee object", emplpyee.returnThis())

console.log("Constructed Full Name using this", emplpyee.getFullName());


const tom = {
    name: "Tom",
    age: 7
}

const jerry = {
    name: 'jerry',
    age: 3
}

function greetMe(obj) {
    obj.logMessage = function() {
        console.log(`${this.name} is ${this.age} years old!`)
    }

    console.log(obj);
}

greetMe(tom);
tom.logMessage();

greetMe(jerry);
jerry.logMessage();


// Inside Function
function sayName() {
    console.log("this inside a function", this);
}

sayName(); //

/*
In non-strict mode, the this keyword inside a regular function refers to the global object (window in browsers).
In strict mode, the this keyword inside a regular function is undefined.
*/
// Nested Function
/*In a nested function, the this keyword does not refer to the outer function's this. 
Instead, it refers to the global object (window in browsers) in non-strict mode, or is undefined in strict mode. 
This is because each function has its own this context, and the inner function does not inherit the this value from the outer function.*/
/* 
In Standalone functions, the this keyword refers to the global object (window in browsers) in non-strict mode, or is undefined in strict mode.
*/
function outer(a) {
    console.log("this inside an outer function", this);

    return function inner(b) {
        console.log("this inside an inner function", this);
    }
}
const outerResult = outer(5); 
outerResult(3)

// Inside the Arrow Function
/*In an arrow function, the this keyword does not refer to its own context. 
Instead, it inherits the this value from the surrounding lexical context. 
This means that the this keyword inside an arrow function refers to the same value as the this keyword in the enclosing scope. 
Arrow functions do not have their own this context, and they cannot be used as constructors or methods. 
They are often used for callbacks and event handlers where the this value needs to be preserved from the outer scope.
*/

const getFood = () => this;

console.log("this inside the arrow function defined in global scope", getFood());


/*
In the context of an object method, if you use an arrow function, the this keyword will not 
refer to the object itself. Instead, it will refer to the global object (window in browsers) 
or be undefined in strict mode. 
This is because arrow functions do not have their own this context and inherit it from the 
surrounding scope, which is the global scope in this case. 
Therefore, using an arrow function as a method of an object will not work as expected when trying 
to access the object's properties using this.
*/
/*
If you want to access the properties of an object using this inside a method, 
you should use a regular function instead of an arrow function.
getDesc: function() {
   return `${this.name} is ${this.color}`
}
this will also give error because the this inside the getDesc function will refer to the global object, not the food object.
To fix this issue, you can use a regular function for getDesc, and if you want to use an arrow function, 
you can define it inside the regular function to access the correct this context.
because the arrow function will inherit the this value from the regular function, which refers to the food object.
*/
const food = {
    name: "mango",
    color: "yellow",

    // getDesc: () => `${this.name} is ${this.color}`,
    // getDesc: function() {
    //     return `${this.name} is ${this.color}`
    // }
    getDesc: function() {
        return () => `${this.name} is ${this.color}`;
    }
}
const descFunc = food.getDesc()
console.log(descFunc())

// Explicit Binding - call, apply, bind

// The call method
/*The call() method is a built-in JavaScript function that allows you to call a function 
with a specified this value and arguments provided individually. It is used to invoke a function
and explicitly set the this context for that function. 
The syntax for call() is as follows:

functionName.call(thisArg, arg1, arg2, ...)

- thisArg: The value to be used as the this context when calling the function.
- arg1, arg2, ...: The arguments to be passed to the function.

The call() method is useful when you want to borrow a method from another object or 
when you want to set the this context for a function that is not a method of an object. 
It allows you to control the value of this inside the function and can be used to achieve 
method borrowing and function currying.
*/

function greeting() {
    console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
    name: 'tapaScript',
    address: 'All of YOU!'
};

greeting.call(user);


//call() with arguments
const likes = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}

const person = {
    name: "Tapas"
}

likes.call(person, "Teaching", "Blogging")

// apply()
/*
The apply() method is similar to call(), but it takes the arguments as an array instead of individually.
The syntax for apply() is as follows:

functionName.apply(thisArg, [argsArray])

- thisArg: The value to be used as the this context when calling the function.
- argsArray: An array of arguments to be passed to the function.

The apply() method is useful when you have an array of arguments that you want to pass to a function, 
or when you want to use the spread operator to pass an array of arguments to a function. 
It allows you to control the value of this inside the function and can be used for method borrowing 
and function currying, similar to call().
*/
const hobbiesToApply = ["Sleeping", "Eating"];

likes.apply(person, hobbiesToApply)

// bind()
/*
The bind() method is a built-in JavaScript function that creates a new function with a specified 
this value and optional arguments. 
It does not immediately invoke the function but instead returns a new function that can be called later. 
The syntax for bind() is as follows:

functionName.bind(thisArg, arg1, arg2, ...)

- thisArg: The value to be used as the this context when calling the function.
- arg1, arg2, ...: Optional arguments to be passed to the function.

The bind() method is useful when you want to create a new function with a specific this context 
and pre-set arguments. 
It allows you to control the value of this inside the function and can be used for method borrowing, 
function currying, and event handling where you want to ensure that the this context is preserved.
*/
const newHobbies = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}

const officer = {
    name: 'Bob',
};

const newFn = newHobbies.bind(officer, "Dancing", "Singing");
newFn();

// The new binding
/*
When a function is used as a constructor with the new keyword, the this keyword inside that 
function refers to the newly created object.
The new keyword creates a new object and sets the this context of the constructor function to 
that new object. 
This allows you to create multiple instances of an object with their own properties and methods. 
When you call a constructor function with new, it returns the newly created object, which can be 
assigned to a variable for further use.
*/  
const Cartoon = function(name, animal) {
    this.name = name;
    this.animal = animal;
    this.log = function() {
        console.log(this.name +  ' is a ' + this.animal);
    }
};


const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();
