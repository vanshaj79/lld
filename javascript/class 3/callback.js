//functions that are passed as an argument to another functions is called callback

function func1(a,b,cb1,cb2){
    cb1()
    cb2()
    return a+b
}

function func2(){
    console.log("I'm func2")
}

function func3(){
    console.log("I'm func3")
}

let num1=1
let num2=2
let sum=func1(num1,num2,func2,func3)
console.log(sum)
