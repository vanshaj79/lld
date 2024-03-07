const { log } = require('console');
let fs = require('fs')

console.log('start');

let promise_file1 = fs.promises.readFile('./file1.txt', 'utf8')
let promise_file2 = fs.promises.readFile('./file2.txt', 'utf8')
let promise_file3 = fs.promises.readFile('./file3.txt', 'utf8')

console.log('finish');
//console.log(promise_file1);

const readcallback = data => {
    console.log('promise is resolved with this: ',data);
}
const errorcallback = error =>{
    console.log('promise is rejected with this: ',error);
}
const finallycallback = () => {
    console.log('promise is executed');
}

promise_file1
    .then(readcallback)
    .catch(errorcallback)
    .finally(finallycallback)

promise_file2
    .then(readcallback)
    .catch(errorcallback)
    .finally(finallycallback)

promise_file3
    .then(readcallback)
    .catch(errorcallback)
    .finally(finallycallback)
    
// finally always executes
promise_file3.finally(() =>{
    console.log('promise is executed');
})

// amother way to handle promise.
// promise_file1.then((data , error) => {
//     if(error){
//         console.log('promise is rejected with this error: ', error)
//     }
//     else{
//         console.log('Promise is resolved and the data is:' ,data)
//     }
// })