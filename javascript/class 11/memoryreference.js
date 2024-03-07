let str1='string'
let str2='yet another string'

console.log(str1);
console.log(str2);

str2=str1;
console.log(str1);
console.log(str2);

// Reference datatypes
let obj1={
    name:'sanchit'
}

let obj2={
    age:'prateek'
}
obj2=obj1

obj2.age='newsanchit'

console.log(obj1);
console.log(obj2);

// Shallow copy 
let obj3={
    address:'nizamganj',
    hello:12
}
let obj4=obj3

console.log(obj3);
console.log(obj4);

// Deep copy
// 1. convert your object into string
let stringifiedCopyOfObj = JSON.stringify(obj1)

// 2. convert string into object
let obj5=JSON.parse(stringifiedCopyOfObj)
obj1.name='new vanshaj'

console.log(obj1);
console.log(obj5);