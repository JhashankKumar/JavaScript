
console.log(10<20<30); // Output: true
console.log(30<20<10); // Output: true

console.log(10>20>30); // Output: false

console.log(10>20<30); // Output: true
console.log(30>20<10); // Output: true

console.log(10<20<0); // Output: false
/*
In this code snippet, we are using comparison operators to compare numbers in JavaScript.

1. The first console.log(10<20<30) evaluates to true because 10 is less than 20, 
   and then true (which is coerced to 1) is less than 30.
2. The second console.log(30<20<10) evaluates to true because 30 is not less than 20, 
   so false (which is coerced to 0) is less than 10.
3. The third console.log(10>20>30) evaluates to false because 10 is not greater than 20, 
   so false (which is coerced to 0) is not greater than 30.
4. The fourth console.log(10>20<30) evaluates to true because 10 is not greater than 20, 
   so false (which is coerced to 0) is less than 30.
5. The fifth console.log(30>20<10) evaluates to true because 30 is greater than 20, 
   so true (which is coerced to 1) is less than 10.

Overall, this demonstrates how comparison operators work in JavaScript and how 
type coercion can affect the results of comparisons.
*/

