let arr = [4,3,3,2,1,7]
console.log(arr.sort())

let obj = {
    name: 'sanchit',
    gender:'male',
    toString:function toString(){
        console.log('hello')
    }
}

console.log(obj.toString())

// adding prototype function in Object 
Object.prototype.whoIsYourMaster = function(){
    console.log('sanchit is my master')
}
console.log(Object.whoIsYourMaster())
console.log(Object.getPrototypeOf(arr))

let arrayPrototype = Object.getPrototypeOf(arr)
let objectprototype = Object.getPrototypeOf(arrayPrototype)
console.log(objectprototype)
let protoOfObjectProto = Object.getPrototypeOf(objectprototype)

console.log(protoOfObjectProto)