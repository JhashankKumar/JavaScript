function f1() {
    return {
        Intro : "Java Script Lover"
    };
}

function f2() {
    return
    {
        Intro : "Java Script Lover"
    };

}

console.log(f1());
console.log(f2());

// The output of the code will be:
// { Intro: 'Java Script Lover' }
// undefined    

/*
Function f1() returns an object with a property Intro, 
while function f2() returns undefined because of the automatic semicolon insertion in JavaScript. 
In f2(), the return statement is followed by a newline, which causes JavaScript to insert a 
semicolon after the return statement, resulting in the function returning undefined instead of the object.
*/
