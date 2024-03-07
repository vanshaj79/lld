
// case 1: Global context -> {}
console.log("global context :",this);

// case 2: Functional context -> global object
function func(){
    console.log("function context :",this)
}
func();

// case 3: Object method -> object itself
let obj = {
    name:'vanshaj',
    func:function func1(){
        console.log("In object method :",this)
    }
}
obj.func()

// case 4: Nested function -> global object
let obj2 = {
    name:'vanshaj',
    func:function func1(){
        function func2(){
            console.log("In object method :",this)
        }
        func2()
    }
}
obj2.func()