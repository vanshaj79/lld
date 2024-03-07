// polymorphism
class person{
    constructor(_name){
        this.name = _name
        this.greet = function(){
            console.log(`hi my name is ${this.name}`)
        }
    }
}

let person1 = new person('Sanchit')
let person2 = new person('Sandeep')

// person1.greet()
// person2.greet()

// class student extends person{
//     constructor(_name,_age){
//         super(_name)
//         this.age = _age
//         this.greet = function(){
//             console.log(`hi i am new student my name is ${this.name}`)
//         }
//     }
// }

// let student1 = new student('vanshaj',23)
// student1.greet()
// person2.greet()

// Encapsulation
let student = {}
student.name='sanchit'
student.age=26
student.cgpa=6
student.bankAccountNumber='12345'

class Student {
    #bankAccountNumber //making it private
    constructor(_name,_age,_cgpa,_bankAccountNumber){
        this.name=_name
        this.age=_age
        this.cgpa=_cgpa
        this.#bankAccountNumber=_bankAccountNumber
        this.getBankAccountNumber=function getBankAccountNumber(){
            console.log(this.#bankAccountNumber)
        }
    }
}
let student2 =new Student('vansh',26,7,12345)
console.log(student2)

// console.log(student2.#bankAccountNumber) - throw error 
student2.getBankAccountNumber()


// Abstraction
class Customer{
    #accountBalance
    constructor(_accountBalance){
        this.#accountBalance = _accountBalance
        // getter function
        this.getAccountBalance=function getAccountBalance(){
            // if user is authorised
            return this.#accountBalance
        }
        // setter function
        this.setAccountBalance =function setAccountBalance(_newAccountBalance){
            if(_accountBalance>0){
                this.#accountBalance = _newAccountBalance
            }
        } 
    }
    getAccountBalance(){
        // if user is authorised
        return this.accountBalance
    }
}

let customer = new Customer(100)

// customer.#accountBalance = 10 - error bcz it is private
console.log(customer.getAccountBalance());
customer.setAccountBalance(20)
console.log(customer.getAccountBalance());
