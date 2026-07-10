let playlsit = {
    name: "crash course in javascript",
    vedio: 30
}

console.log(typeof playlsit)
let str = JSON.stringify(playlsit);
console.log(typeof str) // Output: string

let obj = JSON.parse(str);
console.log(typeof obj) // Output: object

/*
In this code snippet, we are working with JSON (JavaScript Object Notation) to convert a 
JavaScript object to a JSON string and then back to a JavaScript object.

1. We define an object named 'playlsit' with properties 'name' and 'vedio'.
2. We use JSON.stringify(playlsit) to convert the 'playlsit' object into a JSON string. 
The resulting string is stored in the variable 'str'.
3. We log the type of 'str' using typeof, which outputs 'string'.
4. We then use JSON.parse(str) to convert the JSON string back into a JavaScript object. 
The resulting object is stored in the variable 'obj'.
5. Finally, we log the type of 'obj' using typeof, which outputs 'object'.

Overall, this demonstrates how to serialize a JavaScript object into a JSON string 
and deserialize it back into an object, allowing for easy data storage and transmission.
*/