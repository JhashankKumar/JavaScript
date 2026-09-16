for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// Output after 1 second:
// 5
// 5
// 5
// 5
// 5

for (var i = 0; i < 5; i++) {
    setTimeout(function(j) {
        console.log(j);
    }, 1000, i);
}

// Output after 1 second:
// 0
// 1
// 2
// 3
// 4

/*
In this example, we pass the current value of i as an argument to the setTimeout callback function. 
This creates a new variable j that is scoped to the callback function and has the 
value of i at the time the setTimeout was called. 
As a result, each callback logs its own value of j, which is the expected behavior.
*/  


for (var i = 0; i < 5; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j);
        }, 1000);
    })(i);
}

// Output after 1 second:
// 0
// 1
// 2
// 3
// 4

/*
In this example, we use an immediately invoked function expression (IIFE) to create a new scope for each iteration of the loop. 
We pass the current value of i as an argument to the IIFE, which creates a new variable j that is scoped to that iteration. 
As a result, each setTimeout callback logs its own value of j, which is the expected behavior.
*/

for (let j = 0; j < 5; j++) {
    setTimeout(function() {
        console.log(j);
    }, 1000);
}

// Output after 1 second:
// 0
// 1
// 2
// 3
// 4

/*
In the first loop, we use var to declare the variable i. 
Since var has function scope, all the setTimeout callbacks share the same i variable. 
By the time the callbacks are executed after 1 second, the loop has completed and i has a value of 5. 
Therefore, all the callbacks log 5.

In the second loop, we use let to declare the variable j. 
Since let has block scope, each iteration of the loop creates a new binding for j. 
As a result, each setTimeout callback logs its own value of j, which is the expected behavior.
*/