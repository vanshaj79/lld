const { error } = require('console');
let fs = require('fs')

console.log('start');

let promise_file1 = fs.promises.readFile('./file.txt', 'utf8')

const readcallback1 = data => {
    console.log('promise is resolved and the result is:', data);
    let promise_file2 = fs.promises.readFile('./file2.txt', 'utf8')
    return promise_file2
}
const errorcallback1 = error =>{
    console.log('promise is rejected with this error:', error)
    let promise_file2 = fs.promises.readFile('./file2.txt', 'utf8')
    return promise_file2
}
let readcallback2 = data => {
    console.log('promise is resolved and the result is:', data)
    let promise_file3 = fs.promises.readFile('./file3.txt', 'utf8')
    return promise_file3
}
let readcallback3 = data => {
    console.log('promise is resolved and the result is:', data)
}
promise_file1.then(readcallback1).catch(errorcallback1).then(readcallback2).then(readcallback3)

console.log('finish')