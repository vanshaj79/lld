let promise = new Promise((resolve, reject) => {
    // write logic for resolve and reject state
    // some task which needs to be done by this promise
    const a = 5
    const b = 5
    if(a == b){
        resolve('value is equal ')
    }
    else{
        reject('vaue is not equal ')
    }
})

// console.log(promise);

// if promise is resolved then do something 
// then method takes two arguments, a callback for success and another for failure.
// Both are optional, so you can add a callback for success or failure only.
promise.then(data => { // whatever value is passed in resolve is now came here in data 
    // do something
    console.log('promise is resolved. final data is: ',data);
})

// catch method 
promise.catch(error => {
    // handle error
    console.log('promise is rejected due to this error: ',error);
})