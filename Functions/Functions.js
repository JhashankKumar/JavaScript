console.log("Day 06");

// Define or Declare a Function
function printThis() {
    console.log("Printing...")
}

// Call or Invoke a Function
printThis();

// Function as an Expression
let printMe = function() {
    console.log("Print Me")
}

printMe();

// Parameters & Arguments
function sum(a, b) {
    const result = a + b;
    //console.log(result);
    return result;
}

let result = sum(10, 9);
console.log(result)

function double(x) {
    return 2*x;
}
console.log(double(result));

// Default Parameters

function calc(a=0, b=0) {
    return (2 * (a + b ))
}

const resVar = calc()
console.log(resVar);


// Rest Parameter
function calculateThis(x, y, ...rest){
    console.log(x, y, rest)
}

calculateThis(1,2,3,4,5,6,7,8,9)

// Nested Fucntion

function outer() {
    console.log("Outer");

    return function inner() {
        console.log("inner")
    }
    //inner();
}

let retFunc = outer();

console.log(retFunc());


// callback function
const toCallBuz  = false;

function foo(func) {
    console.log("foo");
    if (toCallBuz){
        func();
    }
}

const buz = function() {
    console.log("buz")
}

foo(buz);

// Pure function
let greeetingMsg = "Hola "

function greeting(name) {
    return greeetingMsg + name;
}

console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));

greeetingMsg = "Namaste "

console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));


// Higher Order Function

function getCamera(camera) {
    camera();
}

getCamera(function() {
    console.log("Sony")
})

function returnFunc(param) {
    return function() {
        if (param === 1) {
            console.log("Hello")
        }

    }
}

const retFun = returnFunc(3);
retFun();


// Arrow Function

let greetMe = (greetingMsg) => {
    //
    //
    return greetingMsg + " great"
}

console.log(greetMe("Hola"));


// IIFE(Immediately Invoked Function Expression)
(function(count){
    console.log("IIFE", count)
})(1)


// Recursion

/*function foo() {
    foo();
}*/

function fetchWater(count) {
    console.log("Fetching Water...", count);
    if (count === 0) {
        console.log("No more water is left to fetch...");
        return;
    }
    fetchWater(count - 1)
}

fetchWater(5)

/*
Function: 

1. Function are used where we need to write same code or implement same functionality again and again ( Basically it saves us from repeating same lines of code continuously )
2. We have to declare and define a function by “function” keyword followed by a name and () parenthesis . we write function body within the curly braces {}.
3. We have to invoke/call the function by its name and () like : add(), sum() etc.
4. A function can take multiple parameters ( placeholder for arguments). 
    1. Parameters are the inputs or placeholder declared when declaring/defining the function in contrary arguments are the value which will replace those placeholder/parameter.
5. We have to pass desired arguments when calling the function.

Return keyword: 

1. A function returns the value if we use “return” keyword. return keyword followed by some value returns that value from the function. If return keyword doesn’t have any value after it. it returns “undefined”.

REST Parameter: 

1. …rest parameter helps us to catch all the arguments pass in the function

Nested Function : 

1. We can nest functions inside another function. But in this case we have to call the inner function in the outer function’s body
2. We can return a function from another function. As of outer function returns inner function (HOF)

Callback function: 

1. A function can take another function as parameter and execute it. So its a Higher Order Function. 
2. The function will be passed in the HOF is the Callback Function.
3. A HOF can return another function too.

Pure Function: 

1. If a function returns same output for same input it is called pure function.
2. Basically it takes inputs calculate them and pass an output.
3. but if a function do more than that will be called those works side effects.

Arrow Function: 

1. Arrow function is a shorter and more cleaner syntax to write JS Functions. 

IIFE ( Immediately Invoked Function Expression ):

1. a function expression wrapped with first parenthesis and immediately invoked after the expression like this: (function(){})(). 

Function Execution Stack / Call stack: 

1. Stack is a data structure.
2. When a function is called it will be put in the stack and when it executes it will be terminated from the stack.
3. It follows LIFO  rule. Last function inter the stack first one get out.

Recursion:

1. When a function call itself is called recursion. 
2. A recursion function must have an exit criteria or base condition/exit condition.
*/