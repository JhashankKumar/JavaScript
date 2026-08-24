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

// object creation
const person1 = {
    name: "Alice",
    age: 28,
    isStudent: false,
    favoriteColor: "Purple",
    favoriteFood: "Pasta",
    hobby: "Painting",
    favoriteMovie: "The Shawshank Redemption"
};

let person2 = {
    name: "Bob",
    age: 22,
    isStudent: true,
    favoriteColor: "Yellow",
    favoriteFood: "Tacos",
    hobby: "Gaming",
    favoriteMovie: "The Dark Knight",
    modify : {
        changeName: function(newName) {
            this.name = newName;
        },
        changeAge: function(newAge) {
            this.age = newAge;
        },
        changeIsStudent: function changeIsStudent(newIsStudent) {
            this.isStudent = newIsStudent;
        },
        changeFavoriteColor: function changeFavoriteColor(newFavoriteColor) {
            this.favoriteColor = newFavoriteColor;
        },
        changeFavoriteFood:(newFavoriteFood) => {
            this.favoriteFood = newFavoriteFood;
        },
        changeHobby: (newHobby) => {
            this.hobby = newHobby;
        },
        changeFavoriteMovie: function(newFavoriteMovie) {
            this.favoriteMovie = newFavoriteMovie;
        }   
    }
};

//explain the difference between functions changeName, changeIsStudent and changeFavoriteFood in person2 object
// changeName and changeIsStudent are regular functions, so they have their own 'this' context, which refers to the person2 object. 
// changeFavoriteFood is an arrow function, so it does not have its own 'this' context and inherits 'this' from the surrounding scope, which is not the person2 object. 
// Therefore, changeFavoriteFood will not work as expected when trying to modify the person2 object.
// what will happen if we call changeFavoriteFood function of person2 object?
// If we call changeFavoriteFood function of person2 object, it will not modify the favoriteFood property of person2 object because it is an arrow function and does not have its own 'this' context. 
// Instead, it will try to modify the favoriteFood property of the global object (window in browsers), which is not what we want.
// person2.modify.changeFavoriteFood("Sushi"); // This will not work as expected

//logs of person1 and person2 objects
console.log("logs of person1 and person2 objects:");
console.log(person1);
console.log(person2);
person2.modify.changeName("Charlie");
person2.modify.changeFavoriteFood("Sushi");
console.log("logs of person2 object after modifications:");
console.log(person2);

// console.log(typeof person1);
// console.log(typeof person2);