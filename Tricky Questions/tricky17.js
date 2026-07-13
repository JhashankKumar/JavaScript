const arr =  [];
for(var i = 0; i < 8; i++) {
    arr[i] = function() {
        return i;
    };
}

console.log(arr[0]()); // 10
console.log(arr[1]()); // 10
console.log(arr[2]()); // 10
console.log(arr[3]()); // 10
console.log(arr[4]()); // 10
console.log(arr[5]()); // 10
console.log(arr[6]()); // 10
console.log(arr[7]()); // 10
// console.log(arr[8]()); // 10
// console.log(arr[9]()); // 10

/*
In this example, we have an array of functions that return the value of the variable i. 
However, since the variable i is declared with var, it has function scope and is shared 
across all iterations of the loop. 
As a result, when we call any of the functions in the array, they all return the final value of i, 
which is 10.

To fix this issue, we can use let instead of var to declare the variable i, 
which has block scope and creates a new binding for each iteration of the loop. 
This way, each function in the array will have its own copy of the variable i and will 
return the expected value.

Here's the corrected code:

const arr =  [];
for(let i = 0; i < 10; i++) {
    arr[i] = function() {
        return i;
    };
}

console.log(arr[0]()); // 0
console.log(arr[1]()); // 1
console.log(arr[2]()); // 2
console.log(arr[3]()); // 3
console.log(arr[4]()); // 4
console.log(arr[5]()); // 5
console.log(arr[6]()); // 6
console.log(arr[7]()); // 7
console.log(arr[8]()); // 8
console.log(arr[9]()); // 9

Now, each function in the array will return the expected value of i for its respective iteration.
*/