//var is a global variable, even if it is declared locally 
// if(true){
//     var age=23;
// } 
//here age is declared locally but its scope is global 
//means you can access or manipulate it outside the local scope

var myfirstvar="myfirst"
console.log(myfirstvar)
myfirstvar = true
console.log(myfirstvar)

// var a; //declare
// a=5; //initialise
// a=9; //re-initialsie
// var a=10; //redeclare
// var b=10;

//let variable always have local scope
//can be access only inside its block
let var2 = 5;
var2 = 10; //reintialise is allowed
console.log(var2)

// let var2 = 18; //re declare is not possible in let

const var3 = 50;
var3 = 60; //re-initialse is not possible in const

// const var3=10; //re-declare is not possible in const
//const variable always have local scope
//Access only inside its block
