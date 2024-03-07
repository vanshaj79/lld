//convert list of transacton into USD and filter out credit transactions
//function chaining

let transactions=[100,-200,300,400,-500,600]
let InUsd=transactions.map(function(transaction){
    return transaction/82
}).filter(function(InUsd){
    return InUsd>0
})

console.log(InUsd)