// let number = prompt("Enter a number:");

// if (number >= 0) {
//     console.log("The number is positive.");
// }
// else{
//     console.log("The number is negative.");
// }
// if (number % 2 === 0) {
//     console.log("The number is even.");
// }
// else {
//     console.log("The number is odd.");
// }

// let age = prompt("Enter your age:");

// if (age >= 18) {
//     console.log("You are an adult.");
//     console.log("You can vote.");
//     console.log("You can drive.");
// }
// else {
//     console.log("You are a minor.");
//     console.log("You cannot vote.");
//     console.log("You cannot drive.");
// }


// let salary = prompt("Enter your salary:");

// let bonus = salary * 0.2;
// console.log("Your bonus is: " + bonus);
// console.log("Your total compensation is: " + (parseFloat(salary) + bonus));

// //Traffic light simulation
// let trafficLight = prompt("Enter the traffic light color (red, yellow, green):");
// trafficLight = trafficLight.toLowerCase();
// if (trafficLight === "red") {
//     console.log("Stop!");
// }
// else if (trafficLight === "yellow") {
//     console.log("Get ready to stop.");
// }
// else if (trafficLight === "green") {
//     console.log("Go!");
// }
// else {
//     console.log("Invalid traffic light color.");
// }

// //Electricity bill calculation
// let units = prompt("Enter the number of electricity units consumed:");
// units = parseFloat(units);
// let billAmount;

// let unit_cost = 150;
// let amount = units * unit_cost;
// console.log("Your monthly electricity bill is : " + amount);
// let discount = amount * 0.2; //20% discount
// billAmount = amount - discount;
// console.log("You have received a discount of (Yearly payment) : " + 20+"%");
// console.log("Your total bill after discount is : " + billAmount);

// Bit wise operators
let a = 5;
let doubleA = a << 1; // Left shift
console.log("Double of " + a + " is: " + doubleA);

let b = 10;
let halfB = b >> 1; // Right shift
console.log("Half of " + b + " is: " + halfB);

let c = 6; // 110 in binary
let d = 3; // 011 in binary
let andResult = c & d; // Bitwise AND
console.log("Bitwise AND of " + c + " and " + d + " is: " + andResult);


// max of 3 numbers
let num1 = prompt("Enter the first number:");
console.log(typeof num1); // string
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

let max = num1;

if (num2 > max) {
    max = num2;
}
if (num3 > max) {
    max = num3;
}

console.log("The maximum number is: " + max);