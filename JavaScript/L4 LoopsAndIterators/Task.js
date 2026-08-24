// Patterns
let pattern = "*".repeat(10);
console.log(pattern);

// Pattern 1
/*
 *
 **
 ***
 ****
 *****
 */

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row.trim());
}

//Task 2
// Table of Given number
let number = 5;
console.log("Table of " + number);
for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i);
}

// Task 3
// printing the odd's and even's from 1 to 500
console.log("Even numbers from 1 to 500:");
for (let i = 1; i <= 500; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Odd numbers from 1 to 500:");
for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Task 4
// skip the multiples of 3 from 1 to 100
console.log("Numbers from 1 to 100, skipping multiples of 3:");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// Task 5
// reverse digits of a number
let num = 12345;
let reversed = 0;

while (num > 0) {
  let digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);
}

console.log("Reversed number: " + reversed);
