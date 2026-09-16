console.log(num);
var num = 6;
console.log(num);

console.log(num2);
let num2 = 6;
console.log(num2);

console.log(num3);
const num3 = 6;
console.log(num3);

// The output of the code will be:
// undefined
// 6
// ReferenceError: Cannot access 'num2' before initialization
// ReferenceError: Cannot access 'num3' before initialization

/*
In the first case, the variable num is hoisted and initialized with undefined, 
so the first console.log(num) outputs undefined. After that, num is assigned the value 6, 
so the second console.log(num) outputs 6.

In the second case, let and const declarations are also hoisted but are not initialized. 
Therefore, trying to access num2 or num3 before their declaration results in a ReferenceError.
*/