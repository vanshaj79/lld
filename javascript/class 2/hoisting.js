console.log(a)  
//we are able to access this variable
// before it was initialised or declared ,this is called hoisting
//hoisting does not work in case of declaring variables with keyword "let" or "const"
//means you cannot access the variable before if declared with keyword let
var ans=myfunc(5)
console.log(ans)
var a=10;

function myfunc(a){
    return a*a
}

console.log(a)
// let and const variable resides insides the temporal dead zone(TDZ means the state where variables are unreachable ,they are in scope but not declared)
// Hoisting is a JavaScript behavior where variable and 
// function declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can use a variable or a function before it is declared in your code without raising an error.