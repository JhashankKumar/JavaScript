console.log(typeof typeof typeof true); // "string"

console.log(typeof typeof true); // "string"

/*
The `typeof` operator returns a string indicating the type of the operand.
1. The innermost `typeof true` evaluates to "boolean".
2. The next `typeof "boolean"` evaluates to "string".
3. Finally, the outermost `typeof "string"` evaluates to "string".

So the final output will be:
"string"
*/