/*
This is one of the reasons var is considered bad practice:

Pollutes global scope
Causes naming conflicts (like this one)
Hoisting issues
Harder to debug
*/

/*
“var attaches variables to the global object (window), 
which can override built-in properties like window.name, causing unexpected behavior. 
let and const avoid this by being block-scoped.”
*/

// With var
// {
// console.log('name is ', name);
// var name = "tom";
// name = 'tom';
// console.log('name is ', name);
// }

// With let
{
    console.log('name is ', name);
    let name = "tom";
    name = 'tom';
    console.log('name is ', name);
}

// With const
{
    console.log('name is ', name);
    const name = "tom";
    //name = 'tom';
    console.log('name is ', name);
}


// Temporal Dead Zone(TDZ)

// TDZ = an area where you can not access a variable until it is initialized

// ReferenceError

{
    // === name variable's TDZ started here
    //
    //console.log(name); // ReferenceError
    //
    console.log(address); // ReferenceError
    let address = "bangalore";
    //
    let name = "tapaScript" // === name variable's TDZ ends here
    console.log(name);
    //
    //
}