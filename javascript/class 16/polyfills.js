// polyfills are the code implementations that provide modern features to the environment that are not supported by it.
// They essentially fills the gap or polyfill the missing functionalities in older browsers or environment, 
// allowing developers to use the latest ES features even in less capable environments.

let arr = [1,2,3,4,5]

// syntax to make polyfill
Array.prototype.sort = function(){
    console.log('sanchit is my master')
}
console.log(arr)
// console.log(arr.sort()) // it overrides the prototype method (sort)



// Polyfill for map() method
console.log(arr);
function square(a){
    return a*a
}
Array.prototype.myMap = function(cb){ // map function takes callback as an argument and return an array
    let newArr = []
    for(var i = 0; i < this.length; i++){
        newArr.push(cb(this[i]))
    }
    return newArr
}
let ans = arr.myMap(square)
console.log(ans)
console.log(arr)


// polyfill for filter method
function isEven(a){
    return a%2 == 0
}
// let ans2 = arr.filter(isEven)
// console.log(ans2)
// console.log(arr)

Array.prototype.myFilter = function(cb){
    let newArr = []
    for(var i=0; i<this.length; i++){
        if(cb(this[i])){
            newArr.push(this[i])
        }
    }
    return newArr
}
let ans2 = arr.myFilter(isEven)
console.log(ans2);
console.log(arr)


// Polyfill for reduce()
let sumReduce = function(accumulator, currentValue){
    return accumulator + currentValue
}
Array.prototype.myReduce = function(initialValue, cb){
    let accumulator,startIndex
    if(initialValue){
        accumulator = initialValue
        startIndex = 0
    }
    else{
        accumulator = this[0]
        startIndex = 1
    }
    for(var i = startIndex; i<this.length; i++){
        accumulator = cb(accumulator, this[i])
    }
    return accumulator
}
console.log(arr.myReduce(0, sumReduce));