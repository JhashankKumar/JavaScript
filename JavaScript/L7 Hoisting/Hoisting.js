// Example of variable hoisting in JavaScript
// In JavaScript, variable declarations (using var) are hoisted to the top of their scope.
console.log("Before declaration: " + myVar); // Output: undefined

var myVar = "Hello, World!";
// The variable myVar is hoisted to the top of its scope, but its assignment is not.
// During the creation phase of the execution context, myVar is declared and initialized with undefined.
/*In JavaScript, only the declaration is hoisted, not the initialization. 
Therefore, when we try to access myVar before its declaration, 
it returns undefined instead of throwing a ReferenceError. 
After the declaration and assignment, myVar holds the value "Hello, World!"*/


console.log("After declaration: " + myVar); // Output: Hello, World!

// In JavaScript, variable declarations (using let and const) are also hoisted, but they are not initialized until their definition is evaluated.
console.log("Before declaration: " + myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization

let myLet = "Hello, let!";
/*In this case, myLet is hoisted to the top of its scope, but it is not initialized. 
Accessing myLet before its declaration results in a ReferenceError because it is in a "temporal dead zone" until the declaration is evaluated. 
After the declaration, myLet holds the value "Hello, let!"*/

console.log("After declaration: " + myLet); // Output: Hello, let!


// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------


// Example of function hoisting in JavaScript
// In JavaScript, function declarations are hoisted to the top of their scope.
myFunction(); // Output: "Hello from myFunction!"

function myFunction() {
    console.log("Hello from myFunction!");
}
/*In this case, the entire function declaration is hoisted to the top of its scope. 
Therefore, we can call myFunction before its declaration without any issues. 
The function is available in the execution context from the beginning, so it executes successfully.*/

// However, function expressions are not hoisted in the same way as function declarations.
// This will result in a TypeError because myFunctionExpression is not a function at the time of the call.

//using var for function expression
myFunctionExpression(); // Output: TypeError: myFunctionExpression is not a function
console.log(myFunctionExpression); // Output: undefined

var myFunctionExpression = function() {
    console.log("Hello from myFunctionExpression!");
};
/*In this case, only the variable declaration (myFunctionExpression) is hoisted, but it is initialized with undefined. 
When we try to call myFunctionExpression before its assignment, it results in a TypeError because we are trying to call undefined as a function. 
After the assignment, myFunctionExpression holds the function expression and can be called successfully.*/

myFunctionExpression(); // Output: "Hello from myFunctionExpression!"
console.log(myFunctionExpression); // Output: [Function: myFunctionExpression]

// Using let for function expression
myLetFunctionExpression(); // Output: ReferenceError: Cannot access 'myLetFunctionExpression' before initialization

let myLetFunctionExpression = function() {
    console.log("Hello from myLetFunctionExpression!");
};
/*In this case, myLetFunctionExpression is hoisted but not initialized, similar to the previous example with let. 
Accessing it before its declaration results in a ReferenceError because it is in a temporal dead zone until the declaration is evaluated. 
After the declaration, myLetFunctionExpression holds the function expression and can be called successfully.*/

myLetFunctionExpression(); // Output: "Hello from myLetFunctionExpression!"

// does hoisting work with arrow functions?

myArrowFunction(); // Output: ReferenceError: Cannot access 'myArrowFunction' before initialization

const myArrowFunction = () => {
    console.log("Hello from myArrowFunction!");
};
/*In this case, myArrowFunction is hoisted but not initialized, similar to the previous examples with let and const. 
Accessing it before its declaration results in a ReferenceError because it is in a temporal dead zone until the declaration is evaluated. 
After the declaration, myArrowFunction holds the arrow function and can be called successfully.*/

myArrowFunction(); // Output: "Hello from myArrowFunction!" 