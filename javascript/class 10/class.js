class Person{
    // constructor function
    constructor(_name,_age,_gender){
        this.name = _name
        this.age = _age
        this.gender = _gender
        this.greet = function greet(){
            console.log('hello')
        }
    }
    // prototype function
    // greet() {
    //     console.log('hello');    
    // }

    static whoAreYou(){
        console.log('Im a static person')
    }
}

let person1 = new Person('vanshaj', 23,'male')
let person2 = new Person('vanshaj', 23,'male')


console.log(person1);
person1.greet()
person1.saybye = function saybye(){
    console.log('bye')
}
person1.saybye()
Person.whoAreYou()