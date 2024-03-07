//agenda for the class
// arrays
// function
// execution context
// hoisting (important)
// temporal dead zone
// objects 

let arr=[1,2,3,4,5]
//access an element
console.log(arr[2])

//lenght of array
console.log("Length of array "+ arr.length)

//push an element at end of the array
arr.push(6)
console.log(arr)

arr.push(...[7,8,9])// spread operator
console.log(arr)

//pop an element from the end of the array
let last=arr.pop()
console.log(arr,last);

//add element to the start of array 
arr.unshift(0); 
console.log(arr)

//remove element from the start of array
arr.shift();
console.log(arr);