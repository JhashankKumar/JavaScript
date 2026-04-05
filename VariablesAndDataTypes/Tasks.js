//name 
const name1 = "John Doe 1";
let name2 = "John Doe 2";
var name = "John Doe 3";
console.log("logs of name variables:");
console.log(name1);
console.log(name2);
//Uncaught ReferenceError: name3 is not defined
// console.log(name3); 
console.log(typeof name1);
console.log(typeof name2);
// console.log(typeof name3);

//re-assignment to const, let and var variables
// name1 = "Jane Doe"; // Uncaught TypeError: Assignment to constant variable.
name2 = "Jane Doe 2"; // Allowed
name3 = "Jane Doe 3"; // Allowed, but not recommended to use undeclared variables
console.log("logs after re-assignment:");
console.log(name1);
console.log(name2);
console.log(name3);

//age
const age1 = 30;
let age2 = 25;
var age3 = 40;
console.log("logs of age variables:");
console.log(age1);
console.log(age2);
console.log(age3);
console.log(typeof age1);
console.log(typeof age2);
console.log(typeof age3);

//isStudent
const isStudent1 = true;
let isStudent2 = false;
var isStudent3 = true;
console.log("logs of isStudent variables:");
console.log(isStudent1);
console.log(isStudent2);
console.log(isStudent3);
console.log(typeof isStudent1);
console.log(typeof isStudent2);
console.log(typeof isStudent3);

//favoriteColor
const favoriteColor1 = "Blue";
let favoriteColor2 = "Red";
var favoriteColor3 = "Green";
console.log("logs of favoriteColor variables:");
console.log(favoriteColor1);
console.log(favoriteColor2);
console.log(favoriteColor3);
console.log(typeof favoriteColor1);
console.log(typeof favoriteColor2);
console.log(typeof favoriteColor3);

//favoriteFood
const favoriteFood1 = "Pizza";
let favoriteFood2 = "Sushi";
var favoriteFood3 = "Burger";
console.log("logs of favoriteFood variables:");
console.log(favoriteFood1);
console.log(favoriteFood2);
console.log(favoriteFood3);
console.log(typeof favoriteFood1);
console.log(typeof favoriteFood2);
console.log(typeof favoriteFood3);

//hobby
const hobby1 = "Reading";
let hobby2 = "Traveling";
var hobby3 = "Cooking";
console.log("logs of hobby variables:");
console.log(hobby1);
console.log(hobby2);
console.log(hobby3);
console.log(typeof hobby1);
console.log(typeof hobby2);
console.log(typeof hobby3);

//favoriteMovie
const favoriteMovie1 = "Inception";
let favoriteMovie2 = "The Matrix";
var favoriteMovie3 = "The Godfather";
console.log("logs of favoriteMovie variables:");
console.log(favoriteMovie1);
console.log(favoriteMovie2);
console.log(favoriteMovie3);
console.log(typeof favoriteMovie1);
console.log(typeof favoriteMovie2);
console.log(typeof favoriteMovie3);
