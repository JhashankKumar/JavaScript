setTimeout(function() {
  console.log('Hello, World!');
}, 1000);

Promise.resolve()
.then(function() {
  console.log('Hello, Promise!');
})
.then(function() {
  console.log('Hello, Promise 2!');
});

console.log('Hello, Synchronous!');

// call stack: the call stack is a data structure that keeps track of the function calls in a program.

// adding callback 

const greetings = () => {
  console.log('Hello, mike!');
};

greetings() // Hello, mike!

// microtask queue: the microtask queue is a queue of tasks that are executed after the current call stack is cleared. 
// It is used to handle asynchronous code, such as Promises and async/await.

/*
the sequence of execution in JavaScript is as follows:
1. Synchronous code is executed first, in the order it appears in the code.
2. Asynchronous code, such as setTimeout and Promises, is executed after the synchronous code has completed.
3. Promises are executed in the order they were added to the microtask queue, which is a queue of tasks that are executed after the current call stack is cleared.
4. setTimeout callbacks are executed after the current call stack is cleared and the microtasks are completed.

In this example, the synchronous code (console.log('Hello, Synchronous!')) is executed first, 
followed by the Promise callbacks (console.log('Hello, Promise!') and console.log('Hello, Promise 2!')), 
and finally the setTimeout callback (console.log('Hello, World!')) is executed after a delay of 1000 milliseconds.  
*/
/*
In this example, we have a setTimeout function with a delay of 1000 milliseconds, 
which means it will be executed after the current call stack is cleared. 
We also have a Promise that resolves immediately and has two then() callbacks.

When we run this code, the output will be:
Hello, Synchronous!
Hello, Promise!
Hello, Promise 2!
Hello, World!

This is because the synchronous code (console.log('Hello, Synchronous!')) is executed first.
Then, the Promise callbacks are executed in the order they were added to the microtask queue.
Finally, the setTimeout callback is executed after the current call stack is cleared and the microtasks are completed.
*/