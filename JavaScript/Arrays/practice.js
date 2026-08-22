console.log("Practicing splice method on arrays");

let arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);

// Removing elements using splice
let removedElements = arr.splice(2, 1); // Removes 1 element starting from index 2
console.log("Removed elements:", removedElements);
console.log("Array after removal:", arr);

// Removing multiple elements using splice
let removedMultiple = arr.splice(1, 2); // Removes 2 elements starting from index 1
console.log("Removed multiple elements:", removedMultiple);
console.log("Array after removing multiple elements:", arr);

// Adding elements using splice
arr.splice(1, 0, 'a', 'b'); // Adds 'a' and 'b' at index 1 without removing any element
console.log("Array after adding elements:", arr);

// Replacing elements using splice
arr.splice(3, 1, 'c'); // Replaces 1 element at index 3 with 'c'
console.log("Array after replacing an element:", arr);

let arr2 = [];
// Removing elements from an empty array using splice
let removedFromEmpty = arr2.splice(0, 1); // Attempting to remove 1 element from an empty array
console.log("Removed elements from empty array:", removedFromEmpty);
console.log("Array after attempting to remove from empty array:", arr2);


// Adding elements to an empty array using splice
arr2.splice(0, 0, 'x', 'y', 'z'); // Adds 'x', 'y', and 'z' at index 0
console.log("Array after adding elements to an empty array:", arr2);

// Removing all elements from the array using splice
arr2.splice(0, arr2.length); // Removes all elements starting from index 0
console.log("Array after removing all elements:", arr2);

// Negative index with splice
let arr3 = [10, 20, 30, 40, 50];
console.log("Original array:", arr3);
arr3.splice(-2, 1); // Removes 1 element starting from the second last index
console.log("Array after removing element with negative index:", arr3);