var channel = "Tricky Questions";

function deletechannel() {
    delete channel;
    return channel;
}

console.log(deletechannel()); // Tricky Questions

/*
In JavaScript, the delete operator is used to remove properties from objects. 
However, it does not work on variables declared with var, let, or const. 
In this case, the variable channel is declared with var, so the delete operator will not remove it. 
Instead, it will return false and the variable will still exist in the scope.

Therefore, when you call the deletechannel() function, it will return the value of channel, 
which is "Tricky Questions".
*/

const obj = {
    name: "Tricky Questions",
    age: 5,
    location: "Internet"
};

console.log(obj); // { name: 'Tricky Questions', age: 5, location: 'Internet' }
delete obj.age;
console.log(obj); // { name: 'Tricky Questions', location: 'Internet' }