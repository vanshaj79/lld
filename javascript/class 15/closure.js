function parent(){
    var a=10
    function child(){
        console.log(a)
    }
    return child // jb kuch return krte h function ko to wo function destroy ho jata h execution context se 
                 // but wo bind ho jata h apne parent se to wo function closure kehlata h
}

var childfunc = parent()
childfunc()

// parent()() // another way of calling 

const sum = a => b => c => a+b+c
console.log(sum(1)(2)(3)) // currying