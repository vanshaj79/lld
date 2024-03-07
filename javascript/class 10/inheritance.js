class person{
    constructor(_name, _age, _gender){
        this.name = _name
        this.age = _age
        this.gender = _gender
        this.greet = function greet(){
            console.log(`${this.name} says hello`)
        }
    }
}

class student extends person{
    constructor(_name, _age, _gender, _cgpa, _batchName){
        super(_name, _age, _gender)
        this.cgpa = _cgpa
        this.batchName = _batchName
    }
}

class teacher extends person{
    constructor(_name, _age, _gender, _averageRating, _batchStrength){
        super(_name,_age,_gender)
        this.averageRating = _averageRating
        this.batchStrength = _batchStrength
    }
}

let person1 = new person('rajesh',25,'male')
console.log(person1)
person1.greet()

let student1 = new student('bala',30,'male','8.5','lld full stack')
console.log(student1);
student1.greet()

let teacher1 = new teacher('sanchit',26,'male',4,100)
console.log(teacher1);
teacher1.greet()