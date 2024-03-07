//object
let obj={
    //it's properties and separated by a comma
    name:"vanshaj",
    age:22
}
console.log(obj)//acessing whole object
console.log(obj.name)//acessing name property
console.log(obj['age'])//have to give '' otherwise error
console.log(obj.age);
//array
let arr=[1,2,"vanshaj",4,{},obj]//arrays in js you can give any type of data to array
console.log(arr)
console.log(arr[5]['age'])
console.log(arr[5].name)

