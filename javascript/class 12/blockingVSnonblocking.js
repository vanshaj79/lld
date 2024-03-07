const task1 = ()=>{
    console.log('completed task 1');
}

const heavyTaskBlocking =()=>{
    console.log('performing it in a sync fashion');
    var start = Date.now() //09:26:10
    while(Date.now() - start < 5000){
        //09:26:11
        //09:26:12
        //09:26:13
        //09:26:14
        //09:26:15
    }
    console.log('completed heavy task')
}

const heavyTaskNonBlocking = () =>{
    console.log('Skipping it. will perform it async')
    setTimeout(() => {
        console.log('completed heavy task');        
    }, 5000);
}

const task2 = ()=>{
    console.log('completed task 2');
}

task1()
//heavyTaskBlocking()
heavyTaskNonBlocking()
task2()
