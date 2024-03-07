function getEmailGlobal(domain,greet){
    console.log(greet);
    console.log(`${this.firstName}.${this.lastName}@${domain}.com`)
}

let student1={
    firstName:'adam',
    lastName:'smith',
    age:25,
    getEmail:getEmailGlobal
};

let student2={
    firstName:'Sanchit',
    lastName:'tanwar',
    age:25,
    getEmail:getEmailGlobal
};


console.log(student1.getEmail)
// Call Method
// <function_to_be_invoked>.call(<value_of_this_that_we_want_to_use>)
student1.getEmail.call(student1) // type 1
getEmailGlobal.call(student1) // type 2

// Call method with arguments
getEmailGlobal.call(student1,'gmail','hi')
getEmailGlobal.call(student2,'yahoo','hello')

// Apply
getEmailGlobal.apply(student1,['gmail','hi'])
getEmailGlobal.apply(student2,['yahoo','hello'])

// Bind 
let callLater = getEmailGlobal.bind(student1,"outlook",'offcourse')
console.log(callLater)
//....later in code
callLater()