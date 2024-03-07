// truthy and falsy
// below are some falsy values
// falsy: false, undefined, null, '', NaN, 0

// let a = NaN
// if(a){
//     console.log('truthy');
// }
// else{
//     console.log('falsy');
// }


// difference between == and ===
let b=2
let c='2'
// basically javascript does type coehersion means it automatically converts the variable type to match with other variable value.
console.log(b==c);// loosely type checking: it checks the value only
console.log(b===c)// strict type checking: it checks the value and type also


// typeOf operator
let d = 50
console.log(typeof(d));

// Array.isArray() method
let y = [1,2,3]
let p = {}
console.log(Array.isArray(y));
console.log(Array.isArray(p));

// Infinty
let i = 1/0
console.log(i)

// NaN : not a number
let h = 3*'string'
console.log(h)
console.log(isNaN(h))