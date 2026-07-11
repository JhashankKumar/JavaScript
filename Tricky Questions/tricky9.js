var num = 25
var num2 = num
console.log("num2 is ",num2) // Output: 25
console.log("num is",num) // Output: 25

num = 30
console.log("num2 is ",num2) // Output: 25
console.log("num is",num) // Output: 30

/*
In this code snippet, we are demonstrating the behavior of variable assignment and 
value copying in JavaScript.

Overall, this demonstrates that when assigning a primitive value (like a number) to another variable, 
a copy of the value is made. Changes to the original variable do not affect the copied variable.
*/

const obj = { name: "John", age: 30 }
const obj2 = obj
console.log("obj2 is ",obj2) // Output: { name: "John", age: 30 }
console.log("obj is",obj) // Output: { name: "John", age: 30 }

obj.name = "Jane"
console.log("obj2 is ",obj2) // Output: { name: "Jane", age: 30 }
console.log("obj is",obj) // Output: { name: "Jane", age: 30 }

/*
In this code snippet, we are demonstrating the behavior of object assignment and 
reference copying in JavaScript.

Overall, this demonstrates that when assigning an object to another variable, 
a reference to the original object is created. Changes to the original object 
will affect the copied reference.
*/

/*
In summary, this code snippet illustrates the difference between primitive value assignment and 
object reference assignment in JavaScript. Primitive values are copied by value, while objects 
are copied by reference.
*/

/*
what are copied by value and what are copied by reference in JavaScript?

In JavaScript, the way values are copied depends on whether they are primitive values or objects.

1. Copied by Value:
   - Primitive values are copied by value. 
   This means that when you assign a primitive value (like a number, string, boolean, 
   null, undefined, or symbol) to another variable, a new copy of that value is created. 
   Changes to the original variable do not affect the copied variable.
   - Examples of primitive values:
     - Number: 42
     - String: "Hello"
     - Boolean: true
     - Null: null
     - Undefined: undefined
     - Symbol: Symbol('symbol')

2. Copied by Reference:
   - Objects (including arrays and functions) are copied by reference. 
   This means that when you assign an object to another variable, both variables 
   refer to the same object in memory. Changes made to the object through one variable 
   will be reflected in the other variable.
   - Examples of objects:
     - Object: { name: "John", age: 30 }
     - Array: [1, 2, 3]
     - Function: function() { return "Hello"; }

In summary:
- Primitive values are copied by value, creating independent copies.
- Objects are copied by reference, meaning multiple variables can refer to the same object in memory.
*/