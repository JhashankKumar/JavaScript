var userName = "tapaScript";
// userName = "jhashank";

function printName() {
    console.log(this.userName);
}

printName();

/*
“In this code, the function is called in the global context, 
so this refers to the global object. Since userName is declared using var, 
it becomes a property of the global object. Therefore, this.userName returns 'tapaScript'.”
*/

/*
“The output is undefined because in Node.js, 
variables declared with var are module-scoped and not attached to the global object. 
So this.userName does not exist. However, in a browser, 
it would work because var attaches to the window object.”
*/

