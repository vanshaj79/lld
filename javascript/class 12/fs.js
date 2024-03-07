const fs = require('fs')

// Sync
// console.log('starting');

// const file1 = fs.readFileSync('file1.txt')
// console.log('data of file1 : ',file1)

// const file2 = fs.readFileSync('file2.txt')
// console.log('data of file2 : ',file2)

// console.log('finished')

// Async
console.log('starting');
fs.readFile('file1.txt',(err,result) =>{
    if(err){
        console.log(err);  
    }
    else{
        console.log('Result 1: ',result)
        fs.readFile('file2.txt',(err,result) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log('Result 2: ',result)
            }
        })
    }
})

// const file2 = fs.readFile('file2.txt')
// console.log('data of file2 : ',file2)

console.log('finished')