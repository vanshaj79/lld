let groot = {
    name:"groot", //string
    age:500, //number
    address:{  //object
        houseNumber:123,
        spaceshipname:"guardians",
        palent:{ //nested object
            name:"titan",
            number:123
        }
    },
    sayHi:function(){ //function also
        console.log("I'm groot")
    }
}

console.log(groot.sayHi())

console.log(groot.address.palent.name)
groot.address.palent.number=456 //changing groot planet number
console.log(groot)

delete groot.age //deleting groot age
console.log(groot)

groot.age=550 //again added 
console.log(groot)