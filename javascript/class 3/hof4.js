//Map Function
//takes a callback function and two inputs (mostly)
// returns an array

let numbers=[1,2,3,4,5,6]
let SquareOfNum=numbers.map(function(number,index){
    console.log("Number is : "+number)
    console.log("Index is : "+index)
    return number*number 
});
console.log(SquareOfNum)

//filter function
let transcations=[100,-200,300,400,-500,600]
let CreditTransaction=transcations.filter(function(transcation){
    return transcation>0
});
console.log(CreditTransaction)
console.log(transcations)

//foreach function
//this function doesnot return anything , its return type is void
//use this function when you just need some functionalities to use afterwards in the program
//it doesnot return or store anything 
numbers.forEach(function(number){
    console.log(number*number)
})

//reduce function
//if we want whole array to be boiled up into a single value
//takes two parameters (function,initial value)
//syntax => reduce(function(accumulator, current value){logic},initial value of accumulator)
let TotalSum=numbers.reduce(function(sum,number){
    sum=sum+number;
    return sum
},0)
console.log("sum = "+TotalSum)
//if i dont provide an initialvalue, then the first element in my array will become 
//initialvalue and the looping with start from 1st index instead of 0th index


//every fucntion
//if all the elememts in my array passes a certain conditon 
//then only it will return true otherwise false
let Allpositive=transcations.every(function(transcation){
    return transcation>0
})
console.log(Allpositive)

//some function
//conditon true for some elements
// returns boolean value
let SomeNegative=transcations.some(function(transcation){
    return transcation<0
})
console.log(SomeNegative)