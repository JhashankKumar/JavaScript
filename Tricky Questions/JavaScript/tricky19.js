(function() {
    var first = second = third = 1;
})();

console.log(first); // ReferenceError: first is not defined
console.log(second); // 1
console.log(third); // 1

/*
In this example, we have an immediately invoked function expression (IIFE) that declares three variables: first, second, and third. 
However, only the variable first is declared with var, while second and third are assigned values without var. 
As a result, second and third become global variables, while first is scoped to the IIFE and is not accessible outside of it.

When we try to log the value of first outside of the IIFE, we get a ReferenceError because it is not defined in the global scope. 
However, we can log the values of second and third, which are both equal to 1.
*/