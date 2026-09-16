// method 1: Clear an array by setting its length to 0
const arr1 = [1, 2, 3];
arr1.length = 0; // This will clear the array
console.log(arr1); // Output: []

/*
In this code snippet, we are demonstrating how to clear an array in JavaScript.

Overall, this demonstrates that by setting the length property of an array to 0, 
we can effectively clear the array, removing all its elements.
*/

// method 2: Clear an array by assigning a new empty array
const arr2 = [1, 2, 3];
arr2 = []; // This will create a new empty array
console.log(arr2); // Output: []

/*
In this code snippet, we are demonstrating how to create a new empty array in JavaScript.

Overall, this demonstrates that by assigning a new empty array to an existing array variable, 
we can effectively replace the original array with a new one.
*/

// method 3: Clear an array using the splice method
const arr3 = [1, 2, 3];
arr3.splice(0, arr3.length); // This will remove all elements from the array
console.log(arr3); // Output: []

/*
In this code snippet, we are demonstrating how to clear an array using the splice method in JavaScript.

Overall, this demonstrates that by using the splice method with the appropriate parameters, 
we can remove all elements from an array, effectively clearing it.
*/

/**
splice() syntax:
array.splice(start, deleteCount, item1, item2, ...)

- start: The index at which to start changing the array.
- deleteCount: The number of elements to remove from the array.
- item1, item2, ...: Optional. The elements to add to the array, starting from the start index.

In this case, we are using splice(0, arr.length) to remove all elements from the array 
starting from index 0 and deleting arr.length number of elements. 

*/

