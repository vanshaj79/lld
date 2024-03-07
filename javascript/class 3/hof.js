//Higher Order Function
//HOF always takes a callback as an argument or can return a function
let transaction = [100,-200,300,400,-500,600]

function filtercreditTransact(t){
    let creditTransaction = []
    for(let i=0;i<t.length;i++){
        if(t[i]>0){
            creditTransaction.push(t[i])
        }
    }  
    return creditTransaction;
}

let credit=filtercreditTransact(transaction)
console.log(credit)

function filterdebitTransact(t){
    let debittransaction=[]
    for(let i=0;i<t.length;i++){
        if(t[i]<0)
        debittransaction.push(t[i])
    }
    return debittransaction
}

let debit=filterdebitTransact(transaction)
console.log(debit)

//this is the normal code like normal functioning , without HOF