console.log("Day 11 - Closure");
// Closure is a function that has access to its own scope, the outer function's scope, and the global scope.
// It allows a function to access variables from an enclosing scope even after it leaves the scope in which it was declared.
// Outer Inner
function outer() {
    let x = 10;

    return function inner() {
        console.log(x);
    };
}

const func = outer();
console.log(func()); // 10

// Count Closure
function outerCount() {
    let count = 0;

    return function innerCount() {
        count++;
        console.log(count);
    };
}

const retVal = outerCount();

retVal(); // 1
retVal(); // 2
retVal(); // 3

// Real World Example
/* In this example, we create a bank account with an initial balance. 
The returned object has methods to deposit, withdraw, and check the balance. 
The balance variable is private and can only be accessed through the methods provided by the closure.*/
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function deposit(amount) {
            balance = balance + amount;
            console.log("Deposited ", amount, " Current Balance ", balance);
        },

        withdraw: (amount) => {
            if (amount > balance) {
                console.warn("Insufficient Funds");
            } else {
                balance = balance - amount;
                console.log("Withdrawn ", amount, " Current Balance ", balance);
            }
        },

        checkBalance: () => console.log("Current Balance", balance),
    };
}

const tapaScriptAccount = createBankAccount(100);

console.log(tapaScriptAccount)

console.log(tapaScriptAccount.deposit(300)); // 400

console.log(tapaScriptAccount.withdraw(50)); // 350

console.log(tapaScriptAccount.withdraw(20)); // 330

console.log(tapaScriptAccount.withdraw(50)); // 280

console.log(tapaScriptAccount.withdraw(150)); // 130

console.log(tapaScriptAccount.checkBalance()); // 130


// Closure and Memory Management
// Closure can lead to memory leaks if not used carefully, 
// as it keeps references to variables in the outer scope, preventing them from being garbage collected.
/*In the example below, the bigData array will not be garbage collected as long as the inner 
function is accessible, which can lead to increased memory usage if the bigData array is large.*/
/*To avoid this, you can set the bigData variable to null after it's no longer needed, 
or avoid creating closures that reference large data structures.*/
function dealingWithBigData() {
    let bigData = new Array(10000000).fill("*")

    return function() {
        console.log(bigData[3])
    }
}

const variable12 = dealingWithBigData();

console.log(variable12())


// Usefulness of Closure

// 1. You can keep the variables private without exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep a variable alive between multiple calls.

function timer() {
    let secs = 0;

    return function() {
        secs++;
        console.log("elaspsed seconds ", secs)
    }
}

const timerInstance = timer();
timerInstance(); // 1
timerInstance(); // 2
timerInstance(); // 3


// Closure in Event handler

function setupButton() {
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}

setupButton();