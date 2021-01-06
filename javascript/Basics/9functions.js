//     https://anjandutta.com/function-in-javascript/

// Types of the function definition
// 1 Regular syntax of a named function
// 2 A regular syntax with return value
// 3 Parameterized function in javascript
// 4 Immediately Invoked Function Expression (IIFE)
// 5 Anonymous function
// 6 Assigning a function to a variable
// 7 Arrow function or fat arrow function
// 8 High order function
// 9 Pure function
// 10 Recursive functions


// Function Decleration

// function name(parameter1, parameter2 ....) {
//     statement1
//     statement2
//     .......
//   }


// Named Function

function add(a, b) {
    return a + b;
}
console.log(add(2, 6));


// Variablr Decleartion
var sub = function (a, b) {
    return a - b;
}
console.log(sub(4, 2));

// Immediate innovled functions or selfInnoved functions

(function(a, b) {
    console.log(a-b);
}
)(2, 4);

// ------------ES5------------


// Arrow Functions

var add1=(a,b)=>{
    return a+b;
}
console.log(add1(2,5));