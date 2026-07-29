console.log("A");

async function trickyQuestion() {
  console.log("B");
  let res = await Promise.resolve("C");
  console.log(res);
}

trickyQuestion();
console.log("D");

/*
Here's the order of execution for the code:
1. The first `console.log("A")` is executed, printing "A" to the console.
2. The `trickyQuestion` function is called, which logs "B" to the console.
3. The `await Promise.resolve("c")` is encountered, which pauses the execution of the `trickyQuestion` 
function and allows the event loop to continue.
4. The next `console.log("D")` is executed, printing "D" to the console.
5. After the promise resolves, the execution of the `trickyQuestion` function resumes, logging "C" to the console.

So the final output will be:
A
B
D
C   
*/

/*
Conceptually, the `await` keyword allows the function to pause its execution until the promise is resolved, 
but it does not block the entire program. This is why "D" is printed before "C". 
The event loop continues to run, allowing other code to execute while waiting for the promise to resolve.
*/