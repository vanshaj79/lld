// Currying is nothing but a way to write functions with multiple arguments into a nested series of functions, each taking a single arguments.

// function sum(a, b){
//     return a+b
// }

// console.log(sum(2,3))

function sum(a) {
  return function (b) {
    console.log(a + b);
  };
  // function _sum(){
  //     console.log(a+b)
  // }
  // return _sum
}

// let sumFunc = sum(2)
// sumFunc(3)

sum(2)(3);

// Q1- Function to multipy 2 numbers using currying
function multipy(a) {
  return function (b) {
    console.log(a * b);
  };
}
multipy(2)(3);

// Q2- Function which will take an operation and 2 operands and return the output
function calculate(operation) {
    return function (operand1) {
        return function(operand2){
            if (operation == "sum") {
                return operand1 + operand2;
            } else if (operation == "subtract") {
                return operand1 - operand2;
            } else if (operation == "multiply") {
                return operand1 * operand2;
            } else if (operation == "divide") {
                return operand1 / operand2;
            } else {
                return "Invalid Operation";
            }
        }      
    };
}
console.log(calculate("sum")(2)(3));
console.log(calculate("subtract")(2)(3));
console.log(calculate("multiply")(2)(3));
console.log(calculate("divide")(2)(3));

// Q3- Function which will take variable number of arguments and return the sum of it.
function summ(a) {
    return function (b) {
          if (b) {
            return summ(a + b);
          }
          return a;
    };
}
console.log(summ(1)(2)(3)(4)());
console.log(summ(1)(2)());
console.log(summ(1)(2)(3)(4)(5)(6)());


// Partial Application
function calculate(operation) {
    return function (operand1,operand2){
            if (operation == "sum") {
                return operand1 + operand2;
            } else if (operation == "subtract") {
                return operand1 - operand2;
            } else if (operation == "multiply") {
                return operand1 * operand2;
            } else if (operation == "divide") {
                return operand1 / operand2;
            } else {
                return "Invalid Operation";
            }      
    }
}
console.log(calculate("sum")(2,3));
console.log(calculate("subtract")(2,3));
console.log(calculate("multiply")(2,3));
console.log(calculate("divide")(2,3));