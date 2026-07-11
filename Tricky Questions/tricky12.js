/*
what is null coalescing operator in javascript?
The null coalescing operator (??) in JavaScript is a logical operator that returns the 
right-hand operand when the left-hand operand is null or undefined. If the left-hand operand 
is not null or undefined, it returns the left-hand operand. This operator is useful for 
providing default values when dealing with potentially null or undefined variables.

null coalescing operator is better than the logical OR operator (||) 
because it only checks for null or undefined, while the logical OR operator checks for any 
falsy value (like 0, '', false, etc.). This makes the null coalescing operator more precise 
when you want to provide a default value only for null or undefined cases.

*/

let a;
let b = 10;
let c = a ?? b; // c will be 10 because a is undefined
console.log(c); // Output: 10

let x = [];
let y = [1, 2, 3];
let z = x ?? y;
console.log(z); // Output: [] because x is not null or undefined, so it returns x


/*
Note: if the left-hand operand is any falsy value other than null or undefined (like 0, '', false),
the null coalescing operator will still return the left-hand operand. For example:

let m = 0;
let n = 5;
let o = m ?? n; // o will be 0 because m is not null or undefined
console.log(o); // Output: 0
*/

let m = 0;
let n = 5;
let o = m ?? n; // o will be 0 because m is not null or undefined
console.log(o); // Output: 0
let p =  m || n; // p will be 5 because m is falsy (0), so it returns n
console.log(p); // Output: 5

