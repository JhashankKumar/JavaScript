//Task 1
// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

let celsiusTemp = 25;
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp}°F.`);

// Task 2
//find the maximum and minimum of two numbers
//work for both positive and negative numbers
function findMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function findMin(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

let num1 = -10;
let num2 = -20;
let maxNum = findMax(num1, num2);
let minNum = findMin(num1, num2);
console.log(`The minimum of ${num1} and ${num2} is ${minNum}.`);
console.log(`The maximum of ${num1} and ${num2} is ${maxNum}.`);

// Task 3
// finding palindrome or not without using built in functions
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // if (str[left] !== str[right]) {
    //     return false;
    // }
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// let word = "madam";
let word = "hello";
if (isPalindrome(word)) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}

// difference between charAt and [] to access characters in a string
// charAt is a method that returns the character at a specified index in a string. It is more reliable and works in all browsers.
// [] is an array-like syntax that can be used to access characters in a string, but it may not work in older browsers and can lead to unexpected results if the index is out of bounds.
// Example:
let str = "hello";
console.log(str.charAt(1)); // Output: "e"
console.log(str[1]); // Output: "e"
console.log(str.charAt(10)); // Output: "" (empty string)
console.log(str[10]); // Output: undefined

// Task 4
// finding the factorial of a number using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

let number = 5;
// Time complexity of this recursive factorial function is O(n) because it makes n recursive calls until it reaches the base case. Each call involves a constant amount of work (multiplication), so the overall time complexity is linear with respect to the input number n.
let result = factorial(number);
console.log(`The factorial of ${number} is ${result}.`);

// Task 5
// function to count the number of vowels in a string
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str.charAt(i)) !== -1) {
      count++;
    }
  }
  return count;
}

let inputString = "Hello World";
let vowelCount = countVowels(inputString);
console.log(`The number of vowels in "${inputString}" is ${vowelCount}.`);

// Task 6
// function to captialize the first letter of each word in a string
function capitalizeFirstLetter(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(" ");
}

let sentence = "holy cow this is a sentence";
let capitalizedSentence = capitalizeFirstLetter(sentence);
console.log(`Capitalized: ${capitalizedSentence}.`);

// Task 7
// IIFE (Immediately Invoked Function Expression) to create a private variable
// print Hello and a passing variable
(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice");

//Task 8
// simple call back function
function greet(name, callback) {
  let message = `Hello, ${name}!`;
  callback(message);
}

function printMessage(msg) {
  console.log(msg);
}

greet("Bob", printMessage);

// real world example of callback function
function fetchData(url, callback) {
  // Simulating an asynchronous operation (e.g., fetching data from an API)
  // Simulated data retrieval
  // In a real scenario, you would use something like fetch() or XMLHttpRequest to get data from the URL
  // For demonstration, we will just return a static object after a delay
  // const data = fetch(url).then(response => response.json()).then(data => callback(data));
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" }; // Simulated data
    callback(data);
  }, 2000); // Simulate a delay of 2 seconds
}

function handleData(data) {
  console.log("Data received:", data);
}

fetchData("https://api.example.com/user/1", handleData);

// another real world example of callback function
function processPayment(amount, callback) {
  // Simulating payment processing
  setTimeout(() => {
    const success = true; // Simulate a successful payment
    if (success) {
      callback(null, `Payment of $${amount} processed successfully.`);
    } else {
      callback("Payment failed.", null);
    }
  }, 3000); // Simulate a delay of 3 seconds
}

function paymentResult(error, message) {
  if (error) {
    console.error(error);
  } else {
    console.log(message);
  }
}

processPayment(100, paymentResult);