console.log("Day 12 - JavaScript Objects");

let user = {
    name: "tapas",
    age: 40,
    "is admin": true
};

console.log(user.name); // "tapas"
console.log(user.age); // 40

// Dot notation vs Bracket notation
/*
1. Dot notation is more concise and easier to read, 
while bracket notation can be more flexible and allows for dynamic property access.
2. Dot notation can only be used with valid JavaScript identifiers (e.g., no spaces or special characters), 
while bracket notation can be used with any string as a property name.
3. Dot notation is generally preferred for accessing properties that are known at development time, while bracket notation is often used when the property name is determined dynamically at runtime.
 */
// dot notation
user.isSeniorCitizen = false;
// Bracket notation
user["movie lover"] = true;

console.log(user);

console.log(user["is admin"]);

user.age = 34;
user["movie lover"] = false;

// delete user["movie lover"];
// delete user.age;
console.log(user)


// Dynamic property access
const someKey = "age";

console.log(user[someKey]); // 34

/*let car = prompt("Which is your fav car?");

let favCars = {
    [car]: 5
}

console.log(favCars);*/

// Constructor Function
/* Constructor functions are a special type of function that are used to create objects.
They are defined using the function keyword and are typically named with a capital letter 
to indicate that they are constructors.*/
/* Constructor functions are called using the new keyword, 
which creates a new object and sets the this keyword to refer to that object.*/
/* Constructor functions can also have methods defined on their prototype, 
which allows all instances of the constructor to share the same methods.*/
function Car(name, model) {
    this.name = name;
    this.model = model;
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
console.log(bmwCar)
console.log(audiCar)

console.log(bmwCar instanceof Car);

// Object Literal
// Object literals are a way to create objects using a simple syntax.
/* Object literals are defined using curly braces {} and can contain properties and methods.
Object literals are a convenient way to create objects without the need for a constructor function.*/
const person = new Object()
person.name = "Alpha";
person.age = 76;
console.log(person);


// factory
/* Factory functions are a design pattern in JavaScript that are used to create objects. 
They are similar to constructor functions, but instead of using the new keyword, they return a 
new object directly from the function.*/
/* Factory functions can also have methods defined on their prototype, 
which allows all instances created by the factory to share the same methods. */
function createUser(name, age) {
    return {
       name,
       age,
       greet() {
        console.log(this.name)
       }
    }
}

const user1 = createUser("tapas", 39)
console.log(user1)
user1.name;
user1.age;
user1.greet();
const user2 = createUser("bob", 32)
console.log(user2)

// Nested Objects
/* Nested objects are objects that contain other objects as properties. 
They allow you to create complex data structures and organize related data together. 
Nested objects can be accessed using dot notation or bracket notation, just like any other object property.*/
let profile = {
    name: "tapas",
    company: "CreoWis",
    message: function() {
        console.log(`${this.name} works at ${this.company}`)
    },
    address: {
        city: "Bangalore",
        pin: 56032,
        state: "Karnataka",
        country: "India",
        greeting: function() {
            console.log("Welcome to India")
        }
    }
}


// for ... in
/* The for...in loop is a control flow statement in JavaScript that allows 
you to iterate over the properties of an object. */
/* 
1. The for...in loop iterates over the enumerable properties of an object, 
including properties inherited from the object's prototype chain. 
It is important to note that the order of iteration is not guaranteed, 
and it may not be the same as the order in which the properties were defined. 

2. Dot notation cannot be used to access the properties of an object when using a for...in loop,
because the property names are accessed as strings. 
Instead, bracket notation must be used to access the properties of the object.
 */
for (let key in profile) {
    console.log(key)
    console.log(profile[key]);
}

console.log(Object.keys(profile));

console.log(profile.salary); // undefined

console.log("salary" in profile);

if (!profile.salary) {
    console.log("The salary property doesn't exist");
}

console.log(profile.address.country); // India
profile.address.greeting();
console.log(profile.name);// "tapas"
console.log(profile.company); // "CreoWis"

profile.message();

// Object Reference
/*In JavaScript, objects are reference types, which means that when you assign an object to a variable, 
you are actually assigning a reference to that object in memory, rather than a copy of the object itself.*/
let fruit = { name: "mango"}; // XA01
const oneMoreFruit = { name: "mango"}; // YB02
/* fruit and oneMoreFruit are two different objects in memory, 
even though they have the same properties and values.*/
console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

fruit.name = "banana";
console.log(fruit); // {name: "banana"}
console.log(oneMoreFruit); // {name: "mango"}

fruit = oneMoreFruit;

// Now both fruit and oneMoreFruit reference the same object in memory (YB02)
console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true

// Static Methods

const target = {p:1, a:2};
const source = {a:3, b:5};
/* Object.assign() is a static method that copies the values of all enumerable own properties 
from one or more source objects to a target object. It returns the target object. */
// The first argument is the target object, and the subsequent arguments are the source objects.
/* If there are properties with the same name in multiple source objects, 
the value from the last source object will overwrite the previous values in the target object. */
const retrunedObj = Object.assign(target, source);
console.log(retrunedObj);// {p: 1, a: 3, b: 5}
console.log(target); // {p: 1, a: 3, b: 5}
console.log(source); // {a: 3, b: 5}

/* To avoid mutating the target object, you can create a new object and use Object.assign() 
to copy the properties from the source objects to the new object. */
const objA = {x: 1, y: 2};
const objB = {w: 3, z: 4};
const mergedObj = Object.assign({}, objA, objB);
console.log(mergedObj); // {x: 1, y: 2, w: 3, z: 4}
console.log(objA); // {x: 1, y: 2}
console.log(objB); // {w: 3, z: 4}


/* Object.assign() performs a shallow copy, which means that it only copies the properties 
of the source objects, and if any of those properties are objects themselves, 
it will copy the reference to that object rather than creating a new object. */

//the properties of obj and obj2 are the same, but they are different objects in memory.
/* However, if the properties of the source objects are objects themselves,
the references to those objects will be copied, rather than creating new objects. */
const obj = {name: "tapaScript"};
const obj2 = Object.assign({}, obj);
console.log(obj2)
console.log(obj === obj2) // false

obj.name = "JavaScript";
console.log(obj2.name); // "tapaScript"
console.log(obj.name); // "JavaScript"
// obj2.name = "JavaScript";
// console.log(obj2.name); // "JavaScript"
// console.log(obj.name); // "tapaScript"


// the nested object is not copied, but the reference to the nested object is copied.
/* If the source objects contain nested objects, the references to those nested objects will be copied,
rather than creating new nested objects. This means that changes to the nested objects in the target 
object will affect the nested objects in the source objects, and vice versa. */
/* If you need to create a deep copy of an object, you can use a library like Lodash 
or write a custom function to recursively copy the properties of the object and its nested objects.*/

const obj3 = {
    a: 1,
    b: {c: 2}
}
const obj4 = Object.assign({}, obj3);
console.log(obj4); // {a: 1, b: {c: 2}}

//the properties of obj3 and obj4 are the same, but they are different objects in memory.
/*However, the nested object b is the same object in memory for both obj3 and obj4,
because Object.assign() only performs a shallow copy.*/
console.log(obj3 === obj4) // false
// obj4.b.c = 3;

// obj4.a = 100;

// console.log(obj4.a); // 100
// console.log(obj3.a); // 1

// console.log(obj4.b.c) // 3
// console.log(obj3.b.c) // 3

/* To create a deep copy of an object, you can use the structuredClone() method, 
which is a built-in method in JavaScript that creates a deep copy of an object.*/
const obj5 = structuredClone(obj3);

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c) // 30
console.log(obj3.b.c) // 2


// Object.entries() 
/* Object.entries() is a static method that returns an array of a given object's own 
enumerable string-keyed property [key, value] pairs. The order of the array is the same as 
that provided by a for...in loop. The only difference is that a for...in loop enumerates properties 
in the prototype chain as well, while Object.entries() does not. */

// object to array
const myObj = {
    a: "tapas",
    b: 32,
    c: {
        city: "Bangalore",
        state: "Karnataka",
        country: "India"
    }
};

const myArr = Object.entries(myObj);
console.log(myArr)

// array to object
const myObj2 = Object.fromEntries([
  ["a", "tapas"],
  ["b", 32],
  ["c", Object.fromEntries([
    ["city", "Bangalore"],
    ["state", "Karnataka"],
    ["country", "India"]
  ])]
]);

console.log(myObj2);



// Object.fromEntries()
/* Object.fromEntries() is a static method that transforms a list of key-value pairs into an object. 
It is the inverse of Object.entries(). The input to Object.fromEntries() is an iterable of key-value pairs,
such as an array of arrays or a Map object. The output is a new object created from the key-value pairs. */
const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);
const objEntries = Object.fromEntries(entries)
console.log(objEntries);
console.log(objEntries instanceof Object) // true


const emp = {
    sal: 100
}

Object.freeze(emp);

emp.sal = 200;
emp.name = "Alex";
delete emp.sal;

console.log(emp)

console.log(Object.isFrozen(emp));


const dept = {
    name: "finance"
}

Object.seal(dept);

dept.address = "Bangalore"
delete dept.name;

dept.name = "HR"
console.log(dept)

console.log(Object.hasOwn(dept, "address"))

