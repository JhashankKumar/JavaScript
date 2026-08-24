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

// Pattern 2
/*
*****
****
***
**
*
*/
for (let i = 5; i >= 1; i--) {
  let row = "";
  
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  
  console.log(row.trim());
}

// Pattern 3
/*
    *
   **
  ***
 ****
*****
*/
for (let i = 1; i <= 5; i++) {
  let row = "";
  
  for (let j = 1; j <= 5 - i; j++) {
    row += " ";
  }
  
  for (let k = 1; k <= i; k++) {
    row += "*";
  }
  
  console.log(row);
}

// Pattern 4
/*
*****
 ****
  ***
   **
    *
*/
for (let i = 1; i <= 5; i++) {
  let row = "";
  
  for (let j = 1; j < i; j++) {
    row += " ";
  }
  
  for (let k = 1; k <= 6 - i; k++) {
    row += "*";
  }
  
  console.log(row);
}

// Pattern 5
/*
    *
   ***
  *****
 *******
*********
*/
for (let i = 1; i <= 5; i++) {
  let row = "";
  
  for (let j = 1; j <= 5 - i; j++) {
    row += " ";
  }
  
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  
  console.log(row);
}

//this code doesn't work as worked for other languages, it prints the pattern in a different way, but it is not the same as the one in the task description 
/*
because of the way console.log works in JavaScript, it prints each line separately, so we need to use a different approach to print the pattern correctly. We can use a single loop to build the entire pattern as a string and then print it at once. 
Here's how you can do it:
*/
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log("*".repeat(i-j+1));
//     }
//     console.log();
    
// }
