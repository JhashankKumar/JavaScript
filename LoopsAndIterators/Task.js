// Patterns 
let pattern = "*".repeat(10);
console.log(pattern);

// Pattern 1
let rows = 5;
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        console.log("*".repeat(i-j+1));
    }
    console.log();
    
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  
  console.log(row.trim());
}