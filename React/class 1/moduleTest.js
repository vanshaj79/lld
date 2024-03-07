const calculator =  require('./calculatorModule.js')// Relative path (means path from the current position)
// const calculator = require('~/Desktop')// Absolute path (means path from the root)

console.log(calculator.addition(2, 3))
console.log(calculator.Subtract(2, 3))
console.log(calculator.multiply(2, 3))
console.log(calculator.divide(2, 3))
console.log(calculator.num);