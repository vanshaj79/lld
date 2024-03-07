function func1() {
    console.log("Tradtional way")
}
func1()  //calling function

//function() as variable 
//first class citizens means fundamental units of the language
//In a programming language variables are the first class citizens 
//but in javascript ,functions can be treated as variables actually are variables 
//,so are the first class citizens
let func2=function(){ 
    console.log("Functional expression")
}
func2()

//Arrow functios
let func3=()=>{
    console.log("Arrow functions")
}
func3()

let square=(a)=>{
    return a*a;
}
/* another way 
let square=a=>a*a
*/
let ans=square(3)
console.log(ans)