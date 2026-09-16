console.log(5 + "5"); // Output: 55

console.log(5 - "5"); // Output: 0

console.log(5 * "5"); // Output: 25

console.log(5 / "5"); // Output: 1

console.log(5 % "5"); // Output: 0

/*
In this code snippet, we are performing arithmetic operations between a number and a string in JavaScript.

1. The first console.log(5 + "5") outputs "55" because the + operator performs string concatenation when one of the operands is a string.
2. The second console.log(5 - "5") outputs 0 because the - operator performs numeric subtraction, and the string "5" is coerced to a number.
3. The third console.log(5 * "5") outputs 25 because the * operator performs numeric multiplication, and the string "5" is coerced to a number.
4. The fourth console.log(5 / "5") outputs 1 because the / operator performs numeric division, and the string "5" is coerced to a number.
5. The fifth console.log(5 % "5") outputs 0 because the % operator performs numeric modulus, and the string "5" is coerced to a number.

Overall, this demonstrates how JavaScript handles type coercion when performing arithmetic operations between numbers and strings.
*/

console.log(5 + 5 + "5"); // Output: 105

console.log("5" + 5 + 5); // Output: 555

/*
In this code snippet, we are performing arithmetic operations involving both numbers and strings in JavaScript.

1. The first console.log(5 + 5 + "5") outputs "105" because the first two operands (5 + 5) are numbers, resulting in 10. Then, when we add the string "5", it performs string concatenation, resulting in "105".
2. The second console.log("5" + 5 + 5) outputs "555" because the first operand is a string ("5"), so the + operator performs string concatenation for all subsequent operands, resulting in "555".

Overall, this demonstrates how the order of operations and type coercion can affect the results of arithmetic operations involving both numbers and strings in JavaScript.
*/

console.log(5 - "js"); // Output: NaN
console.log(5 * "js"); // Output: NaN
console.log(5 / "js"); // Output: NaN
console.log(5 % "js"); // Output: NaN

/*
In this code snippet, we are performing a subtraction operation between a 
number and a string in JavaScript.
1. The first console.log(5 - "js") outputs NaN (Not-a-Number) because the string "js" 
cannot be coerced into a number for the subtraction operation.
2. The second console.log(5 * "js") outputs NaN for the same reason, as the string "js"
cannot be coerced into a number for multiplication.
3. The third console.log(5 / "js") also outputs NaN because the string "js" cannot be 
coerced into a number for division.
4. The fourth console.log(5 % "js") outputs NaN because the string "js" cannot be coerced
into a number for the modulus operation.

Overall, this demonstrates that when performing arithmetic operations between a number 
and a non-numeric string in JavaScript, the result will be NaN (Not-a-Number).
*/

console.log("5" + "5") // Output: 55

console.log("5" - "5") // Output: 0

console.log("5" * "5") // Output: 25

console.log("5" / "5") // Output: 1

console.log("5" - 5) // Output: 0

console.log("A" + "B") // Output: AB

console.log("A" - "B") // Output: NaN

console.log("A" * "B") // Output: NaN


/*
In this code snippet, we are performing arithmetic operations between strings in JavaScript.

1. The first console.log("5" + "5") outputs "55" because the + operator performs 
string concatenation when both operands are strings.
2. The second console.log("5" - "5") outputs 0 because the - operator performs numeric subtraction, 
and both strings "5" are coerced to numbers.
3. The third console.log("5" * "5") outputs 25 because the * operator performs numeric multiplication, 
and both strings "5" are coerced to numbers.
4. The fourth console.log("5" / "5") outputs 1 because the / operator performs numeric division, 
and both strings "5" are coerced to numbers.
5. The fifth console.log("5" - 5) outputs 0 because the string "5" is coerced to a number 
for the subtraction operation.
6. The sixth console.log("A" + "B") outputs "AB" because the + operator performs string 
concatenation when both operands are strings.
7. The seventh console.log("A" - "B") outputs NaN because the - operator cannot perform numeric 
subtraction on non-numeric strings, resulting in NaN.
8. The eighth console.log("A" * "B") outputs NaN because the * operator cannot perform numeric 
multiplication on non-numeric strings, resulting in NaN.

Overall, this demonstrates how JavaScript handles arithmetic operations between strings and 
how type coercion can affect the results of these operations.
*/