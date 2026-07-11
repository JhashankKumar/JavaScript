const num =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
delete num[2];
console.log(num);

/*
Don't use the delete operator to remove elements from an array.
Because it leaves an empty slot in the array, which can lead to unexpected behavior when 
iterating over the array or performing other operations. Instead, use methods like splice() 
to remove elements from an array, which will also update the length of the array accordingly.  
*/

/*
delete operator removes the element at index 2 (which is the number 3) from the array, 
but it does not change the length of the array. Instead, it leaves an empty slot at that index. 
Therefore, when you log the array, it will show as:
[1, 2, <1 empty item>, 4, 5, 6, 7, 8, 9, 10]

The length of the array remains 10, but the element at index 2 is now undefined.
*/

// using splice() method to remove the element at index 2
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num2.splice(2, 1); // removes 1 element at index 2
console.log(num2); // [1, 2, 4, 5, 6, 7, 8, 9, 10]
num2.splice(2, 0, 3); // adds 3 back at index 2
console.log(num2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num2.splice(2); // removes all elements from index 2 to the end of the array
console.log(num2); // [1, 2]

/*
The splice() method is a more versatile and safer way to remove elements from an array. 
It allows you to specify the index at which to start removing elements, 
as well as the number of elements to remove. 
Additionally, it can also be used to add new elements to the array at a specified index.

In the example above, we first removed the element at index 2 (which is the number 3) 
using splice(2, 1).
Then, we added the number 3 back to the array at index 2 using splice(2, 0, 3).
Finally, we removed all elements from index 2 to the end of the array using splice(2).

syntax of splice() method:
array.splice(start, deleteCount, item1, item2, ...)

- start: The index at which to start changing the array.
- deleteCount: The number of elements to remove from the array.
- item1, item2, ...: The elements to add to the array, starting at the start index. 
If no elements are specified, splice() will only remove elements from the array.
*/

num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num3);
num3.splice(0)
console.log(num3); // []
num3.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(num3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]