let globalVar = "I am a Global Variable";
function outer() {
    let outerVar = "I am an Outer Variable";
    var count = 20;
    console.log(innerVar); // Reference Error: innerVar is not defined

    function inner() {
        var innerVar = "I am an Inner Variable";

        console.log(innerVar); // "I am an Inner Variable"
        console.log(outerVar); // "I am an Outer Variable"
    }

    inner();
}

outer();

console.log(outerVar); // Reference Error: outerVar is not defined outside the function
console.log(count); // Reference Error: count is not defined outside the function
