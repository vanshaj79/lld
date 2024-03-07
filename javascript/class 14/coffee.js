let placeOrder = (drink) => {
    return new Promise((resolve, reject) =>{
        if(drink == 'coffee'){
            resolve('order for coffee is placed')
        }else{
            reject('order for coffeee not placed')
        }
    })
}
let processOrder = order => {
    return new Promise(resolve => {
        resolve(`${order} and served`)
    })
}
let generateBill = processOrderStatus => {
    return new Promise(resolve => {
        resolve(`${processOrderStatus} and bill is generated`)
    })
}

// console.log(placeOrder('coffee'))
// placeOrder('coffee').then(orderStatus =>{
//     console.log(orderStatus)
//     return orderStatus
// }).then(orderStatus => {
//     let processOrderStatus = processOrder(orderStatus)
//     return processOrderStatus
// }).then(processOrderStatus => {
//     console.log(processOrderStatus)
//     return processOrderStatus
// }).then(processOrderStatus => {
//     let generatedBill = generateBill(processOrderStatus)
//     return generatedBill 
// }).then(generatedBill => {
//     console.log(generatedBill)
// }).catch(error => {
//     console.log(error)
// })


//Async-Await
async function serveOrder(data){
    try{
        let orderStatus =await placeOrder(data)
        console.log(orderStatus);
        let processOrderStatus =await processOrder(orderStatus)
        console.log(processOrderStatus);
        let generatedBill = await generateBill(processOrderStatus)
        console.log(generatedBill);
    }catch(error){
        console.log(error)
    }
}

serveOrder('coffee')
