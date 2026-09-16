console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5
console.log(Math.min(1, 2, 3, 4, 5)); // Output: 1
var arr = [1, 2, 3, 4, 5];

// with spread operator
console.log(Math.max(...arr)); // Output: 5
console.log(Math.min(...arr)); // Output: 1

// with apply method
console.log(Math.max.apply(null, arr)); // Output: 5
console.log(Math.min.apply(null, arr)); // Output: 1


/*
what is the difference between Math.max.apply(arr) and Math.max(...arr) in JavaScript?

The difference between `Math.max.apply(null, arr)` and `Math.max(...arr)` 
in JavaScript lies in how they handle the arguments passed to the `Math.max` function.

1. `Math.max.apply(null, arr)`:
   - The `apply` method is used to call a function with a given `this` value and an array of arguments.
   - In this case, we are passing `null` as the `this` value (since `Math.max` does not use `this`) 
   and the array `arr` as the second argument.
   - The elements of the array are treated as individual arguments to the `Math.max` function.

2. `Math.max(...arr)`:
   - The spread operator (`...`) is used to expand the elements of the array into individual arguments.
   - This means that each element of the array is passed as a separate argument to the `Math.max` function.

In summary, both methods achieve the same result of finding the maximum value in an array, 
but they use different syntax and mechanisms to pass the arguments. 
The spread operator is generally more concise and easier to read.    
*/

console.log(Math.max(arr)); // Output: NaN
console.log(Math.min(arr)); // Output: NaN

/*
console.log(Math.max(arr)); it returns NaN 
because Math.max() or Math.min() expects individual numeric arguments, not an array.
*/

/*
In this code snippet, we are using the Math.max() and Math.min() functions to find the 
maximum and minimum values from a set of numbers.

1. The first console.log(Math.max(1, 2, 3, 4, 5)) outputs the maximum value among the
   provided numbers, which is 5.
2. The second console.log(Math.min(1, 2, 3, 4, 5)) outputs the minimum value among the
   provided numbers, which is 1.
3. We then define an array 'arr' containing the numbers [1, 2, 3, 4, 5].
4. The third console.log(Math.max(...arr)) uses the spread operator (...) to pass the 
   elements of the array as individual arguments to Math.max(), resulting in an output of 5.
5. The fourth console.log(Math.min(...arr)) similarly uses the spread operator to find 
   the minimum value in the array, resulting in an output of 1.

Overall, this demonstrates how to use Math.max() and Math.min() with both individual 
numbers and arrays using the spread operator.
*/