//Task 1
let day = "Monday";
// output: It's a normal day.
switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

//Task 2
// ATM withdrawal
let amount = 400;
if (amount > 0 && amount % 100 === 0) {
  console.log("You can withdraw " + amount + " units.");
} else {
  console.log("Invalid amount. Please enter a multiple of 100.");
}

//Task 3
//Calculator using switch
let num1 = 10;
let num2 = 5;
let operator = "/";
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      console.log("Cannot divide by zero.");
      result = undefined;
    }
    break;
  case "%":
    if (num2 !== 0) {
      result = num1 % num2;
    } else {
      console.log("Cannot divide by zero.");
      result = undefined;
    }
    break;
  default:
    console.log("Invalid operator.");
    result = undefined;
}

if (result !== undefined) {
  console.log("The result is: " + result);
}

//Task 4
// Movie ticket pricing
let age = 25;
let ticketPrice;

if (age < 18) {
  ticketPrice = 3; // Child price
} else if (age >= 18 && age < 60) {
  ticketPrice = 10; // Adult price
} else {
  ticketPrice = 8; // Senior price
}

console.log("The ticket price is: $" + ticketPrice + " units.");

//Task 5
// zodiac sign based on birth month and day
let month = "February";
let dayOfMonth = 18;
let zodiacSign;

if ((month === "March" && dayOfMonth >= 21) || (month === "April" && dayOfMonth <= 19)) {
    zodiacSign = "Aries";
}else if ((month === "April" && dayOfMonth >= 20) || (month === "May" && dayOfMonth <= 20)) {
    zodiacSign = "Taurus";
}else if ((month === "May" && dayOfMonth >= 21) || (month === "June" && dayOfMonth <= 20)) {
    zodiacSign = "Gemini";
}else if ((month === "June" && dayOfMonth >= 21) || (month === "July" && dayOfMonth <= 22)) {
    zodiacSign = "Cancer";
}else if ((month === "July" && dayOfMonth >= 23) || (month === "August" && dayOfMonth <= 22)) {
    zodiacSign = "Leo";
}else if ((month === "August" && dayOfMonth >= 23) || (month === "September" && dayOfMonth <= 22)) {
    zodiacSign = "Virgo";
}else if ((month === "September" && dayOfMonth >= 23) || (month === "October" && dayOfMonth <= 22)) {
    zodiacSign = "Libra";
}else if ((month === "October" && dayOfMonth >= 23) || (month === "November" && dayOfMonth <= 21)) {
    zodiacSign = "Scorpio";
}else if ((month === "November" && dayOfMonth >= 22) || (month === "December" && dayOfMonth <= 21)) {
    zodiacSign = "Sagittarius";
}else if ((month === "December" && dayOfMonth >= 22) || (month === "January" && dayOfMonth <= 19)) {
    zodiacSign = "Capricorn";
}else if ((month === "January" && dayOfMonth >= 20) || (month === "February" && dayOfMonth <= 18)) {
    zodiacSign = "Aquarius";
}else if ((month === "February" && dayOfMonth >= 19) || (month === "March" && dayOfMonth <= 20)) {
    zodiacSign = "Pisces";
}else {
    zodiacSign = "Invalid date.";
}

console.log("Your zodiac sign is: " + zodiacSign);

//Task 6
// Triangle type based on side lengths
let sideA = 5;
let sideB = 4;
let sideC = 6;
let triangleType;

if (sideA === sideB && sideB === sideC) {
    triangleType = "Equilateral";
}else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    triangleType = "Isosceles";
}else {
    triangleType = "Scalene";
}

console.log("The triangle is: " + triangleType);
