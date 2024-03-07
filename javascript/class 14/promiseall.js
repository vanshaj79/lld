// promise.all()

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved 1')
    }, 3000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise resolved 2')
    }, 1000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise resolved 3')
    }, 500);
})

// array of promises.
// Promise.all([promise1, promise2]) 
// .then(data => console.log(data[0], data[1]))
// .catch(error => console.log(error))
// if all the promises pass then the then() condition for all the promises will executed but in race it is not same.
// if any one of the fails then it comes to catch 
// if any one of the promise is takes more time to resolve then the whole then conditon will follow its time.


//promise.race()
// all the promises get executed in parallel but whichever is resolved or rejcted
// first that data will come and rest of the promise you won't get.
// Promise.race([promise1, promise2, promise3])
// .then(data => console.log(data))
// .catch(error => console.log(error))

// promise.any()
// suppose we have 10 promises, 4 of them rejected and 6 are resolved,
// so any() will have 6 resolved one's and executes the fastest resolved one
Promise.any([promise1,promise2,promise3])
.then(data => console.log(data))
.catch(error => console.log(error))