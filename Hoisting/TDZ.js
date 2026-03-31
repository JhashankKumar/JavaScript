// TDZ (Temporal Dead Zone)
// TDZ is a behavior in JavaScript where variables declared with let and const are not accessible before their declaration.
// This means that if you try to access a variable declared with let or const before it is declared, you will get a ReferenceError.

console.log(myVar); // Output: undefined
var myVar = "Hello, World!";

console.log(myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization
let myLet = "Hello, let!";

/*
In the first case, myVar is declared using var, which is hoisted to the top of its scope and initialized with undefined. 
Therefore, when we log myVar before its declaration, it returns undefined.

In the second case, myLet is declared using let, which is also hoisted but not initialized until its declaration is evaluated. 
Accessing myLet before its declaration results in a ReferenceError because it is in a temporal dead zone until the declaration is evaluated.
*/ 

