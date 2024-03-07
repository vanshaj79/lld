 let numbers=[1,2,3,4,5,6]
// numbers.forEach(function(number){
//     console.log(number*number)
// })
// console.log(numbers)
// //output = [1,4,9,16,25,36],[1,4,9,16,25,36]

let TotalSum=numbers.reduce(function(sum,number){
    sum=sum+number;
    return sum
},0)
console.log("sum = "+TotalSum)

//output - sum = 21